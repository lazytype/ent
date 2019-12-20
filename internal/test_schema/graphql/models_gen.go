// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package graphql

import (
	"fmt"
	"io"
	"strconv"
	"time"

	"github.com/lolopinto/ent/internal/test_schema/models"
)

type Connection interface {
	IsConnection()
}

type Edge interface {
	IsEdge()
}

type Node interface {
	IsNode()
}

type AdminBlockResponse struct {
	Success *bool `json:"success"`
}

type AuthUserResult struct {
	Token string       `json:"token"`
	User  *models.User `json:"user"`
}

type ContactCreateInput struct {
	EmailAddress  string   `json:"emailAddress"`
	Favorite      *bool    `json:"favorite"`
	FirstName     string   `json:"firstName"`
	LastName      string   `json:"lastName"`
	NumberOfCalls *int     `json:"numberOfCalls"`
	Pi            *float64 `json:"pi"`
	UserID        string   `json:"userID"`
}

type ContactCreateResponse struct {
	Contact *models.Contact `json:"contact"`
}

type EventCreateInput struct {
	EndTime   *time.Time `json:"endTime"`
	Location  string     `json:"location"`
	Name      string     `json:"name"`
	StartTime time.Time  `json:"startTime"`
	UserID    string     `json:"userID"`
}

type EventCreateResponse struct {
	Event *models.Event `json:"event"`
}

type EventRsvpStatusEditInput struct {
	EventID    string `json:"eventID"`
	RsvpStatus string `json:"rsvpStatus"`
	UserID     string `json:"userID"`
}

type EventRsvpStatusEditResponse struct {
	Event *models.Event `json:"event"`
}

type EventsConnection struct {
	Edges []*EventsEdge   `json:"edges"`
	Nodes []*models.Event `json:"nodes"`
}

func (EventsConnection) IsConnection() {}

type EventsEdge struct {
	Node *models.Event `json:"node"`
}

func (EventsEdge) IsEdge() {}

type LogEvent2Response struct {
	Success *bool `json:"success"`
}

type LogEventResponse struct {
	Success *bool `json:"success"`
}

type UserAddFamilyMemberInput struct {
	FamilyMemberID string `json:"familyMemberID"`
	UserID         string `json:"userID"`
}

type UserAddFamilyMemberResponse struct {
	User *models.User `json:"user"`
}

type UserAddFriendInput struct {
	FriendID string `json:"friendID"`
	UserID   string `json:"userID"`
}

type UserAddFriendResponse struct {
	User *models.User `json:"user"`
}

type UserCreateInput struct {
	Bio          *string `json:"bio"`
	EmailAddress string  `json:"emailAddress"`
	FirstName    string  `json:"firstName"`
	LastName     string  `json:"lastName"`
}

type UserCreateResponse struct {
	User *models.User `json:"user"`
}

type UserDeleteInput struct {
	UserID string `json:"userID"`
}

type UserDeleteResponse struct {
	DeletedUserID *string `json:"deletedUserId"`
}

type UserEditInput struct {
	Bio          *string `json:"bio"`
	EmailAddress string  `json:"emailAddress"`
	FirstName    string  `json:"firstName"`
	LastName     string  `json:"lastName"`
	UserID       string  `json:"userID"`
}

type UserEditResponse struct {
	User *models.User `json:"user"`
}

type UserRemoveFamilyMemberInput struct {
	FamilyMemberID string `json:"familyMemberID"`
	UserID         string `json:"userID"`
}

type UserRemoveFamilyMemberResponse struct {
	User *models.User `json:"user"`
}

type UserRemoveFriendInput struct {
	FriendID string `json:"friendID"`
	UserID   string `json:"userID"`
}

type UserRemoveFriendResponse struct {
	User *models.User `json:"user"`
}

type UsersConnection struct {
	Edges []*UsersEdge   `json:"edges"`
	Nodes []*models.User `json:"nodes"`
}

func (UsersConnection) IsConnection() {}

type UsersEdge struct {
	Node *models.User `json:"node"`
}

func (UsersEdge) IsEdge() {}

type ViewerBlockMultipleResponse struct {
	Success *bool `json:"success"`
}

type ViewerBlockResponse struct {
	Success *bool `json:"success"`
}

type EventRsvpStatus string

const (
	EventRsvpStatusEventAttending EventRsvpStatus = "EVENT_ATTENDING"
	EventRsvpStatusEventDeclined  EventRsvpStatus = "EVENT_DECLINED"
	EventRsvpStatusEventInvited   EventRsvpStatus = "EVENT_INVITED"
	EventRsvpStatusEventUnknown   EventRsvpStatus = "EVENT_UNKNOWN"
)

var AllEventRsvpStatus = []EventRsvpStatus{
	EventRsvpStatusEventAttending,
	EventRsvpStatusEventDeclined,
	EventRsvpStatusEventInvited,
	EventRsvpStatusEventUnknown,
}

func (e EventRsvpStatus) IsValid() bool {
	switch e {
	case EventRsvpStatusEventAttending, EventRsvpStatusEventDeclined, EventRsvpStatusEventInvited, EventRsvpStatusEventUnknown:
		return true
	}
	return false
}

func (e EventRsvpStatus) String() string {
	return string(e)
}

func (e *EventRsvpStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = EventRsvpStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid EventRsvpStatus", str)
	}
	return nil
}

func (e EventRsvpStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
