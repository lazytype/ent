// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package event

import (
	"time"

	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/actions"
	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	"github.com/lolopinto/ent/internal/test_schema/models/configs"
)

type EventMutationBuilder struct {
	builder       *actions.EdgeGroupMutationBuilder
	event         *models.Event
	name          *string
	userID        *string
	userIDBuilder ent.MutationBuilder
	startTime     *time.Time
	endTime       *time.Time
	location      *string
}

func NewMutationBuilder(
	viewer viewer.ViewerContext,
	operation ent.WriteOperation,
	fieldMap ent.ActionFieldMap,
	opts ...func(*actions.EntMutationBuilder),
) *EventMutationBuilder {
	var event models.Event
	b := actions.NewMutationBuilder(
		viewer,
		operation,
		&event,
		&configs.EventConfig{},
		opts...,
	)
	b.FieldMap = fieldMap
	b2 := actions.NewEdgeGroupMutationBuilder(
		b,
		event.RsvpStatusMap(),
	)
	return &EventMutationBuilder{
		builder: b2,
		event:   &event,
	}
}

func (b *EventMutationBuilder) SetName(name string) *EventMutationBuilder {
	b.name = &name
	b.builder.SetField("Name", name)
	return b
}

func (b *EventMutationBuilder) SetUserID(userID string) *EventMutationBuilder {
	b.userID = &userID
	b.builder.SetField("UserID", userID)
	b.builder.AddInboundEdge(models.UserToEventsEdge, userID, models.EventType)
	return b
}

func (b *EventMutationBuilder) SetUserIDBuilder(builder ent.MutationBuilder) *EventMutationBuilder {
	b.userIDBuilder = builder
	b.builder.SetField("UserID", builder)
	b.builder.AddInboundEdge(models.UserToEventsEdge, builder, models.EventType)
	return b
}

func (b *EventMutationBuilder) SetStartTime(startTime time.Time) *EventMutationBuilder {
	b.startTime = &startTime
	b.builder.SetField("StartTime", startTime)
	return b
}

func (b *EventMutationBuilder) SetEndTime(endTime time.Time) *EventMutationBuilder {
	b.endTime = &endTime
	b.builder.SetField("EndTime", endTime)
	return b
}

func (b *EventMutationBuilder) SetLocation(location string) *EventMutationBuilder {
	b.location = &location
	b.builder.SetField("Location", location)
	return b
}

func (b *EventMutationBuilder) GetName() string {
	if b.name == nil {
		return ""
	}
	return *b.name
}

func (b *EventMutationBuilder) GetUserID() string {
	if b.userID == nil {
		return ""
	}

	if b.userIDBuilder != nil {
		return b.userIDBuilder.GetPlaceholderID()
	}
	return *b.userID
}

func (b *EventMutationBuilder) GetUserIDBuilder() ent.MutationBuilder {
	return b.userIDBuilder
}

func (b *EventMutationBuilder) GetStartTime() time.Time {
	if b.startTime == nil {
		return time.Time{}
	}
	return *b.startTime
}

func (b *EventMutationBuilder) GetEndTime() time.Time {
	if b.endTime == nil {
		return time.Time{}
	}
	return *b.endTime
}

func (b *EventMutationBuilder) GetLocation() string {
	if b.location == nil {
		return ""
	}
	return *b.location
}

// AddHosts adds an instance of User to the Hosts edge while editing the User ent
func (b *EventMutationBuilder) AddHosts(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.AddHostsID(user.ID)
	}
	return b
}

// AddHostsID adds an instance of User to the Hosts edge while editing the User ent
func (b *EventMutationBuilder) AddHostsID(userID string, options ...func(*ent.EdgeOperation)) *EventMutationBuilder {
	b.builder.AddOutboundEdge(models.EventToHostsEdge, userID, models.UserType, options...)
	return b
}

// AddCreator adds an instance of User to the Creator edge while editing the User ent
func (b *EventMutationBuilder) AddCreator(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.AddCreatorID(user.ID)
	}
	return b
}

// AddCreatorID adds an instance of User to the Creator edge while editing the User ent
func (b *EventMutationBuilder) AddCreatorID(userID string, options ...func(*ent.EdgeOperation)) *EventMutationBuilder {
	b.builder.AddOutboundEdge(models.EventToCreatorEdge, userID, models.UserType, options...)
	return b
}

// AddInvited adds an instance of User to the Invited edge while editing the User ent
func (b *EventMutationBuilder) AddInvited(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.AddInvitedID(user.ID)
	}
	return b
}

// AddInvitedID adds an instance of User to the Invited edge while editing the User ent
func (b *EventMutationBuilder) AddInvitedID(userID string, options ...func(*ent.EdgeOperation)) *EventMutationBuilder {
	b.builder.AddOutboundEdge(models.EventToInvitedEdge, userID, models.UserType, options...)
	return b
}

// AddAttending adds an instance of User to the Attending edge while editing the User ent
func (b *EventMutationBuilder) AddAttending(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.AddAttendingID(user.ID)
	}
	return b
}

// AddAttendingID adds an instance of User to the Attending edge while editing the User ent
func (b *EventMutationBuilder) AddAttendingID(userID string, options ...func(*ent.EdgeOperation)) *EventMutationBuilder {
	b.builder.AddOutboundEdge(models.EventToAttendingEdge, userID, models.UserType, options...)
	return b
}

// AddDeclined adds an instance of User to the Declined edge while editing the User ent
func (b *EventMutationBuilder) AddDeclined(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.AddDeclinedID(user.ID)
	}
	return b
}

// AddDeclinedID adds an instance of User to the Declined edge while editing the User ent
func (b *EventMutationBuilder) AddDeclinedID(userID string, options ...func(*ent.EdgeOperation)) *EventMutationBuilder {
	b.builder.AddOutboundEdge(models.EventToDeclinedEdge, userID, models.UserType, options...)
	return b
}

// RemoveHosts adds an instance of User to the Hosts edge while editing the User ent
func (b *EventMutationBuilder) RemoveHosts(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.builder.RemoveOutboundEdge(models.EventToHostsEdge, user.ID, models.UserType)
	}
	return b
}

// RemoveHostsID adds an instance of User to the Hosts edge while editing the User ent
func (b *EventMutationBuilder) RemoveHostsID(userID string) *EventMutationBuilder {
	b.builder.RemoveOutboundEdge(models.EventToHostsEdge, userID, models.UserType)
	return b
}

// RemoveCreator adds an instance of User to the Creator edge while editing the User ent
func (b *EventMutationBuilder) RemoveCreator(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.builder.RemoveOutboundEdge(models.EventToCreatorEdge, user.ID, models.UserType)
	}
	return b
}

// RemoveCreatorID adds an instance of User to the Creator edge while editing the User ent
func (b *EventMutationBuilder) RemoveCreatorID(userID string) *EventMutationBuilder {
	b.builder.RemoveOutboundEdge(models.EventToCreatorEdge, userID, models.UserType)
	return b
}

// RemoveInvited adds an instance of User to the Invited edge while editing the User ent
func (b *EventMutationBuilder) RemoveInvited(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.builder.RemoveOutboundEdge(models.EventToInvitedEdge, user.ID, models.UserType)
	}
	return b
}

// RemoveInvitedID adds an instance of User to the Invited edge while editing the User ent
func (b *EventMutationBuilder) RemoveInvitedID(userID string) *EventMutationBuilder {
	b.builder.RemoveOutboundEdge(models.EventToInvitedEdge, userID, models.UserType)
	return b
}

// RemoveAttending adds an instance of User to the Attending edge while editing the User ent
func (b *EventMutationBuilder) RemoveAttending(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.builder.RemoveOutboundEdge(models.EventToAttendingEdge, user.ID, models.UserType)
	}
	return b
}

// RemoveAttendingID adds an instance of User to the Attending edge while editing the User ent
func (b *EventMutationBuilder) RemoveAttendingID(userID string) *EventMutationBuilder {
	b.builder.RemoveOutboundEdge(models.EventToAttendingEdge, userID, models.UserType)
	return b
}

// RemoveDeclined adds an instance of User to the Declined edge while editing the User ent
func (b *EventMutationBuilder) RemoveDeclined(users ...*models.User) *EventMutationBuilder {
	for _, user := range users {
		b.builder.RemoveOutboundEdge(models.EventToDeclinedEdge, user.ID, models.UserType)
	}
	return b
}

// RemoveDeclinedID adds an instance of User to the Declined edge while editing the User ent
func (b *EventMutationBuilder) RemoveDeclinedID(userID string) *EventMutationBuilder {
	b.builder.RemoveOutboundEdge(models.EventToDeclinedEdge, userID, models.UserType)
	return b
}

func (b *EventMutationBuilder) SetEnumValue(enumValue string) *EventMutationBuilder {
	b.builder.SetEnumValue(enumValue)
	return b
}

func (b *EventMutationBuilder) SetIDValue(idValue string, nodeType ent.NodeType) *EventMutationBuilder {
	b.builder.SetIDValue(idValue, nodeType)
	return b
}
func (b *EventMutationBuilder) Validate() error {
	return b.builder.Validate()
}

func (b *EventMutationBuilder) GetViewer() viewer.ViewerContext {
	return b.builder.GetViewer()
}

func (b *EventMutationBuilder) GetEvent() *models.Event {
	return b.event
}

func (b *EventMutationBuilder) SetTriggers(triggers []actions.Trigger) {
	b.builder.SetTriggers(triggers)
}

func (b *EventMutationBuilder) GetChangeset() (ent.Changeset, error) {
	return b.builder.GetChangeset()
}

func (b *EventMutationBuilder) ExistingEnt() ent.Entity {
	return b.builder.ExistingEnt()
}

func (b *EventMutationBuilder) Entity() ent.Entity {
	return b.builder.Entity()
}

func (b *EventMutationBuilder) GetOperation() ent.WriteOperation {
	return b.builder.GetOperation()
}

func (b *EventMutationBuilder) GetPlaceholderID() string {
	return b.builder.GetPlaceholderID()
}

var _ ent.MutationBuilder = &EventMutationBuilder{}

type EventTrigger interface {
	SetBuilder(*EventMutationBuilder)
}

type EventMutationBuilderTrigger struct {
	Builder *EventMutationBuilder
}

func (trigger *EventMutationBuilderTrigger) SetBuilder(b *EventMutationBuilder) {
	trigger.Builder = b
}
