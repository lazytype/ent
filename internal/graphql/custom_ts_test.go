package graphql

import (
	"io/ioutil"
	"os"
	"path/filepath"
	"testing"

	"github.com/lolopinto/ent/internal/codegen"
	"github.com/lolopinto/ent/internal/schema/base"
	"github.com/lolopinto/ent/internal/schema/testhelper"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestCustomMutation(t *testing.T) {
	// simple test that just tests the entire flow.
	// very complicated but simplest no-frills way to test things
	m := map[string]string{
		"contact.ts": testhelper.GetCodeWithSchema(`
			import {BaseEntSchema, Field, StringType, Index} from "{schema}";

			export default class Contact extends BaseEntSchema {
				fields: Field[] = [
					StringType({
						name: "firstName",
					}),
					StringType({
						name: "lastName",
					}),
				];
			}
		`),
	}

	absPath, err := filepath.Abs(".")
	require.NoError(t, err)
	dirPath, err := ioutil.TempDir(absPath, "project")
	defer os.RemoveAll(dirPath)
	require.NoError(t, err)

	schema := testhelper.ParseSchemaForTest(t, m, base.TypeScript, testhelper.TempDir(dirPath))
	data := &codegen.Data{
		Schema:   schema,
		CodePath: codegen.NewCodePath(filepath.Join(dirPath, "src/schema"), ""),
	}

	schemaDir := filepath.Join(dirPath, "src", "graphql", "mutations", "auth")
	require.NoError(t, os.MkdirAll(schemaDir, os.ModePerm))

	code := testhelper.GetCodeWithSchema(`
			import {RequestContext} from "{root}";
			import {gqlMutation, gqlArg} from "{graphql}";

			export class AuthResolver {
			  @gqlMutation({ name: "emailAvailable", type: Boolean })
			  async emailAvailableMutation(@gqlArg("email") email: string) {
					return false;
				}
		  }
		`)

	path := filepath.Join(schemaDir, "auth.ts")
	require.NoError(t, ioutil.WriteFile(path, []byte(code), os.ModePerm))

	s, err := buildSchema(data, true)
	require.NoError(t, err)

	require.Len(t, s.customData.Args, 0)
	require.Len(t, s.customData.Inputs, 0)
	require.Len(t, s.customData.Objects, 0)
	require.Len(t, s.customData.Fields, 0)
	require.Len(t, s.customData.Queries, 0)
	require.Len(t, s.customData.Mutations, 1)
	require.Len(t, s.customData.Classes, 1)
	require.Len(t, s.customData.Files, 1)

	item := s.customData.Mutations[0]
	assert.Equal(t, item.Node, "AuthResolver")
	assert.Equal(t, item.GraphQLName, "emailAvailable")
	assert.Equal(t, item.FunctionName, "emailAvailableMutation")
	assert.Equal(t, item.FieldType, AsyncFunction)

	require.Len(t, item.Args, 1)
	arg := item.Args[0]
	assert.Equal(t, arg.Name, "email")
	assert.Equal(t, arg.Type, "String")
	assert.Equal(t, arg.Nullable, NullableItem(""))
	assert.Equal(t, arg.List, false)
	assert.Equal(t, arg.IsContextArg, false)
	assert.Equal(t, arg.TSType, "string")

	require.Len(t, item.Results, 1)
	result := item.Results[0]
	assert.Equal(t, result.Name, "")
	assert.Equal(t, result.Type, "Boolean")
	assert.Equal(t, result.Nullable, NullableItem(""))
	assert.Equal(t, result.List, false)
	assert.Equal(t, result.IsContextArg, false)
	assert.Equal(t, result.TSType, "boolean")

	require.Len(t, s.customQueries, 0)
	require.Len(t, s.customMutations, 1)

	gqlNode := s.customMutations[0]
	assert.Len(t, gqlNode.connections, 0)
	assert.Len(t, gqlNode.Dependents, 0)
	assert.Equal(t, gqlNode.Field, &item)
	assert.Equal(t, gqlNode.FilePath, "src/graphql/mutations/generated/email_available_type.ts")

	objData := gqlNode.ObjData
	require.NotNil(t, objData)
	assert.Nil(t, objData.NodeData)
	assert.Equal(t, objData.Node, "AuthResolver")
	assert.Equal(t, objData.NodeInstance, "obj")
	assert.Len(t, objData.Enums, 0)
	assert.Len(t, objData.GQLNodes, 0)

	fcfg := objData.FieldConfig
	require.NotNil(t, fcfg)

	assert.True(t, fcfg.Exported)
	assert.Equal(t, fcfg.Name, "EmailAvailableType")
	assert.Equal(t, fcfg.Arg, "")
	assert.Equal(t, fcfg.ResolveMethodArg, "{email}")
	assert.Equal(t, fcfg.ReturnTypeHint, "")
	assert.Equal(t, fcfg.TypeImports, []*fileImport{
		{
			Type:       "GraphQLNonNull",
			ImportPath: "graphql",
		},
		{
			Type:       "GraphQLBoolean",
			ImportPath: "graphql",
		},
	})
	assert.Equal(t, fcfg.ArgImports, []*fileImport{
		{
			Type:       "AuthResolver",
			ImportPath: "../auth/auth",
		},
	})
	assert.Equal(t, fcfg.Args, []*fieldConfigArg{
		{
			Name: "email",
			Imports: []string{
				"GraphQLNonNull",
				"GraphQLString",
			},
		},
	})
	assert.Equal(t, fcfg.FunctionContents, []string{
		"const r = new AuthResolver();",
		"return r.emailAvailableMutation(",
		"email",
		");",
	})
}
