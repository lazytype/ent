// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package action

import (
	"context"
	"errors"

	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/actions"
	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	builder "github.com/lolopinto/ent/internal/test_schema/models/user"
)

type EditUserAction struct {
	builder *builder.UserMutationBuilder
}

// EditUserFromContext is the factory method to get an ...
func EditUserFromContext(ctx context.Context, user *models.User) *EditUserAction {
	v, err := viewer.ForContext(ctx)
	if err != nil {
		panic("tried to perform mutation without a viewer")
	}
	return EditUser(v, user)
}

// EditUser is the factory method to get an ...
func EditUser(viewer viewer.ViewerContext, user *models.User) *EditUserAction {
	action := &EditUserAction{}
	builder := builder.NewMutationBuilder(
		viewer,
		ent.EditOperation,
		action.getFieldMap(),
		actions.ExistingEnt(user),
	)
	action.builder = builder
	return action
}

func (action *EditUserAction) GetBuilder() *builder.UserMutationBuilder {
	return action.builder
}

func (action *EditUserAction) GetViewer() viewer.ViewerContext {
	return action.builder.GetViewer()
}

func (action *EditUserAction) SetBuilderOnTriggers(triggers []actions.Trigger) error {
	action.builder.SetTriggers(triggers)
	for _, t := range triggers {
		trigger, ok := t.(builder.UserTrigger)
		if !ok {
			return errors.New("invalid trigger")
		}
		trigger.SetBuilder(action.builder)
	}
	return nil
}

func (action *EditUserAction) GetChangeset() (ent.Changeset, error) {
	return action.builder.GetChangeset()
}

func (action *EditUserAction) Entity() ent.Entity {
	return action.builder.GetUser()
}

// SetEmailAddress sets the EmailAddress while editing the User ent
func (action *EditUserAction) SetEmailAddress(emailAddress string) *EditUserAction {
	action.builder.SetEmailAddress(emailAddress)
	return action
}

// SetFirstName sets the FirstName while editing the User ent
func (action *EditUserAction) SetFirstName(firstName string) *EditUserAction {
	action.builder.SetFirstName(firstName)
	return action
}

// SetLastName sets the LastName while editing the User ent
func (action *EditUserAction) SetLastName(lastName string) *EditUserAction {
	action.builder.SetLastName(lastName)
	return action
}

// getFieldMap returns the fields that could be edited in this mutation
func (action *EditUserAction) getFieldMap() ent.ActionFieldMap {
	return ent.ActionFieldMap{
		"EmailAddress": &ent.MutatingFieldInfo{
			DB:       "email_address",
			Required: false,
		},
		"FirstName": &ent.MutatingFieldInfo{
			DB:       "first_name",
			Required: false,
		},
		"LastName": &ent.MutatingFieldInfo{
			DB:       "last_name",
			Required: false,
		},
	}
}

// Validate returns an error if the current state of the action is not valid
func (action *EditUserAction) Validate() error {
	return action.builder.Validate()
}

// Save is the method called to execute this action and save change
func (action *EditUserAction) Save() (*models.User, error) {
	err := actions.Save(action)
	return action.builder.GetUser(), err
}

var _ actions.Action = &EditUserAction{}
