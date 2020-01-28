// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package action

import (
	"context"

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
func EditUser(v viewer.ViewerContext, user *models.User) *EditUserAction {
	action := &EditUserAction{}
	builder := builder.NewMutationBuilder(
		v,
		ent.EditOperation,
		action.requiredFields(),
		actions.ExistingEnt(user),
	)
	action.builder = builder
	return action
}

func (action *EditUserAction) GetBuilder() ent.MutationBuilder {
	return action.builder
}

func (action *EditUserAction) GetTypedBuilder() *builder.UserMutationBuilder {
	return action.builder
}

func (action *EditUserAction) GetViewer() viewer.ViewerContext {
	return action.builder.GetViewer()
}

func (action *EditUserAction) SetBuilderOnTriggers(triggers []actions.Trigger) {
	action.builder.SetTriggers(triggers)
}

func (action *EditUserAction) SetBuilderOnObservers(observers []actions.Observer) {
	action.builder.SetObservers(observers)
}

func (action *EditUserAction) SetBuilderOnValidators(validators []actions.Validator) {
	action.builder.SetValidators(validators)
}

func (action *EditUserAction) GetChangeset() (ent.Changeset, error) {
	return actions.GetChangeset(action)
}

func (action *EditUserAction) Entity() ent.Entity {
	return action.builder.GetUser()
}

func (action *EditUserAction) ExistingEnt() ent.Entity {
	return action.builder.ExistingEnt()
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

// SetBio sets the Bio while editing the User ent
func (action *EditUserAction) SetBio(bio string) *EditUserAction {
	action.builder.SetBio(bio)
	return action
}

// SetNilableBio sets the Bio while editing the User ent
func (action *EditUserAction) SetNilableBio(bio *string) *EditUserAction {
	action.builder.SetNilableBio(bio)
	return action
}

func (action *EditUserAction) requiredFields() []string {
	return []string{}
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
