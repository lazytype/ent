// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import {
  NodeQueryType,
  OpenTodosQueryType,
} from "src/graphql/resolvers/internal";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: NodeQueryType,
    openTodos: OpenTodosQueryType,
  }),
});
