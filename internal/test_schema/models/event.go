// Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

package models

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/cast"
	"github.com/lolopinto/ent/ent/viewer"

	"github.com/lolopinto/ent/internal/test_schema/models/configs"
)

type EventRsvpStatus string

const (
	// EventType is the node type for the Event object. Used to identify this node in edges and other places.
	EventType ent.NodeType = "event"

	// EventToAttendingEdge is the edgeType for the event to attending edge.
	EventToAttendingEdge ent.EdgeType = "9f384bf7-af59-4a41-8b67-8ecc659524c6"
	// EventToCreatorEdge is the edgeType for the event to creator edge.
	EventToCreatorEdge ent.EdgeType = "eb45df04-a2ce-4d20-9325-ef6ddb7c5c31"
	// EventToDeclinedEdge is the edgeType for the event to declined edge.
	EventToDeclinedEdge ent.EdgeType = "d7b9e19a-4214-4376-927c-58b98913dbb7"
	// EventToHostsEdge is the edgeType for the event to hosts edge.
	EventToHostsEdge ent.EdgeType = "06a23665-6e2c-413a-bbb0-f53222c313dd"
	// EventToInvitedEdge is the edgeType for the event to invited edge.
	EventToInvitedEdge ent.EdgeType = "12a5ac62-1f9a-4fd7-b38f-a6d229ace12c"

	// EventAttending is the edge representing the status for the Attending edge.
	EventAttending EventRsvpStatus = "event_attending"
	// EventDeclined is the edge representing the status for the Declined edge.
	EventDeclined EventRsvpStatus = "event_declined"
	// EventInvited is the edge representing the status for the Invited edge.
	EventInvited EventRsvpStatus = "event_invited"
	// EventUnknown is the edge representing the unknown status for the RsvpStatus edgegroup.
	EventUnknown EventRsvpStatus = "event_unknown"
)

// Event represents the `Event` model
type Event struct {
	ent.Node
	Name      string     `db:"name"`
	UserID    string     `db:"user_id"`
	StartTime time.Time  `db:"start_time"`
	EndTime   *time.Time `db:"end_time"`
	Location  string     `db:"location"`
	Viewer    viewer.ViewerContext
}

// EventResult stores the result of loading a Event. It's a tuple type which has 2 fields:
// a Event and an error
type EventResult struct {
	Event *Event
	Error error
}

// EventsResult stores the result of loading a slice of Events. It's a tuple type which has 2 fields:
// a []*Event and an error
type EventsResult struct {
	Events []*Event
	Error  error
}

// IsNode is needed by gqlgen to indicate that this implements the Node interface in GraphQL
func (event Event) IsNode() {}

// GetType returns the NodeType of this entity. In this case: ContactType
func (event *Event) GetType() ent.NodeType {
	return EventType
}

// GetViewer returns the viewer for this entity.
func (event *Event) GetViewer() viewer.ViewerContext {
	return event.Viewer
}

// GetPrivacyPolicy returns the PrivacyPolicy of this entity.
func (event *Event) GetPrivacyPolicy() ent.PrivacyPolicy {
	return EventPrivacyPolicy{
		Event: event,
	}
}

// LoadEventFromContext loads the given Event given the context and id
func LoadEventFromContext(ctx context.Context, id string) (*Event, error) {
	v, err := viewer.ForContext(ctx)
	if err != nil {
		return nil, err
	}
	return LoadEvent(v, id)
}

// LoadEvent loads the given Event given the viewer and id
func LoadEvent(viewer viewer.ViewerContext, id string) (*Event, error) {
	var event Event
	err := ent.LoadNode(viewer, id, &event, &configs.EventConfig{})
	return &event, err
}

// GenLoadEvent loads the given Event given the id
func GenLoadEvent(viewer viewer.ViewerContext, id string, result *EventResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var event Event
	chanErr := make(chan error)
	go ent.GenLoadNode(viewer, id, &event, &configs.EventConfig{}, chanErr)
	err := <-chanErr
	result.Event = &event
	result.Error = err
}

// GenUser returns the User associated with the Event instance
func (event *Event) GenUser(result *UserResult, wg *sync.WaitGroup) {
	go GenLoadUser(event.Viewer, event.UserID, result, wg)
}

// LoadUser returns the User associated with the Event instance
func (event *Event) LoadUser() (*User, error) {
	return LoadUser(event.Viewer, event.UserID)
}

// LoadHostsEdges returns the Hosts edges associated with the Event instance
func (event *Event) LoadHostsEdges() ([]*ent.Edge, error) {
	return ent.LoadEdgesByType(event.ID, EventToHostsEdge)
}

// GenHostsEdges returns the User edges associated with the Event instance
func (event *Event) GenHostsEdges(result *ent.EdgesResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgesResultChan := make(chan ent.EdgesResult)
	go ent.GenLoadEdgesByType(event.ID, EventToHostsEdge, edgesResultChan)
	*result = <-edgesResultChan
}

// GenHosts returns the Users associated with the Event instance
func (event *Event) GenHosts(result *UsersResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var users []*User
	chanErr := make(chan error)
	go ent.GenLoadNodesByType(event.Viewer, event.ID, EventToHostsEdge, &users, &configs.UserConfig{}, chanErr)
	err := <-chanErr
	result.Users = users
	result.Error = err
}

// LoadHosts returns the Users associated with the Event instance
func (event *Event) LoadHosts() ([]*User, error) {
	var users []*User
	err := ent.LoadNodesByType(event.Viewer, event.ID, EventToHostsEdge, &users, &configs.UserConfig{})
	return users, err
}

// LoadHostsEdgeFor loads the ent.Edge between the current node and the given id2 for the Hosts edge.
func (event *Event) LoadHostsEdgeFor(id2 string) (*ent.Edge, error) {
	return ent.LoadEdgeByType(event.ID, id2, EventToHostsEdge)
}

// GenHostsEdgeFor provides a concurrent API to load the ent.Edge between the current node and the given id2 for the Hosts edge.
func (event *Event) GenLoadHostsEdgeFor(id2 string, result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadEdgeByType(event.ID, id2, EventToHostsEdge, edgeResultChan)
	*result = <-edgeResultChan
}

// LoadCreatorEdge returns the Creator edge associated with the Event instance
func (event *Event) LoadCreatorEdge() (*ent.Edge, error) {
	return ent.LoadUniqueEdgeByType(event.ID, EventToCreatorEdge)
}

// GenCreatorEdge returns the Creator edge associated with the Event instance
func (event *Event) GenCreatorEdge(result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadUniqueEdgeByType(event.ID, EventToCreatorEdge, edgeResultChan)
	*result = <-edgeResultChan
}

// GenCreator returns the User associated with the Event instance
func (event *Event) GenCreator(result *UserResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var user User
	chanErr := make(chan error)
	go ent.GenLoadUniqueNodeByType(event.Viewer, event.ID, EventToCreatorEdge, &user, &configs.UserConfig{}, chanErr)
	err := <-chanErr
	result.User = &user
	result.Error = err
}

// LoadCreator returns the User associated with the Event instance
func (event *Event) LoadCreator() (*User, error) {
	var user User
	err := ent.LoadUniqueNodeByType(event.Viewer, event.ID, EventToCreatorEdge, &user, &configs.UserConfig{})
	return &user, err
}

// LoadCreatorEdgeFor loads the ent.Edge between the current node and the given id2 for the Creator edge.
func (event *Event) LoadCreatorEdgeFor(id2 string) (*ent.Edge, error) {
	return ent.LoadEdgeByType(event.ID, id2, EventToCreatorEdge)
}

// GenCreatorEdgeFor provides a concurrent API to load the ent.Edge between the current node and the given id2 for the Creator edge.
func (event *Event) GenLoadCreatorEdgeFor(id2 string, result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadEdgeByType(event.ID, id2, EventToCreatorEdge, edgeResultChan)
	*result = <-edgeResultChan
}

// LoadInvitedEdges returns the Invited edges associated with the Event instance
func (event *Event) LoadInvitedEdges() ([]*ent.Edge, error) {
	return ent.LoadEdgesByType(event.ID, EventToInvitedEdge)
}

// GenInvitedEdges returns the User edges associated with the Event instance
func (event *Event) GenInvitedEdges(result *ent.EdgesResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgesResultChan := make(chan ent.EdgesResult)
	go ent.GenLoadEdgesByType(event.ID, EventToInvitedEdge, edgesResultChan)
	*result = <-edgesResultChan
}

// GenInvited returns the Users associated with the Event instance
func (event *Event) GenInvited(result *UsersResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var users []*User
	chanErr := make(chan error)
	go ent.GenLoadNodesByType(event.Viewer, event.ID, EventToInvitedEdge, &users, &configs.UserConfig{}, chanErr)
	err := <-chanErr
	result.Users = users
	result.Error = err
}

// LoadInvited returns the Users associated with the Event instance
func (event *Event) LoadInvited() ([]*User, error) {
	var users []*User
	err := ent.LoadNodesByType(event.Viewer, event.ID, EventToInvitedEdge, &users, &configs.UserConfig{})
	return users, err
}

// LoadInvitedEdgeFor loads the ent.Edge between the current node and the given id2 for the Invited edge.
func (event *Event) LoadInvitedEdgeFor(id2 string) (*ent.Edge, error) {
	return ent.LoadEdgeByType(event.ID, id2, EventToInvitedEdge)
}

// GenInvitedEdgeFor provides a concurrent API to load the ent.Edge between the current node and the given id2 for the Invited edge.
func (event *Event) GenLoadInvitedEdgeFor(id2 string, result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadEdgeByType(event.ID, id2, EventToInvitedEdge, edgeResultChan)
	*result = <-edgeResultChan
}

// LoadAttendingEdges returns the Attending edges associated with the Event instance
func (event *Event) LoadAttendingEdges() ([]*ent.Edge, error) {
	return ent.LoadEdgesByType(event.ID, EventToAttendingEdge)
}

// GenAttendingEdges returns the User edges associated with the Event instance
func (event *Event) GenAttendingEdges(result *ent.EdgesResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgesResultChan := make(chan ent.EdgesResult)
	go ent.GenLoadEdgesByType(event.ID, EventToAttendingEdge, edgesResultChan)
	*result = <-edgesResultChan
}

// GenAttending returns the Users associated with the Event instance
func (event *Event) GenAttending(result *UsersResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var users []*User
	chanErr := make(chan error)
	go ent.GenLoadNodesByType(event.Viewer, event.ID, EventToAttendingEdge, &users, &configs.UserConfig{}, chanErr)
	err := <-chanErr
	result.Users = users
	result.Error = err
}

// LoadAttending returns the Users associated with the Event instance
func (event *Event) LoadAttending() ([]*User, error) {
	var users []*User
	err := ent.LoadNodesByType(event.Viewer, event.ID, EventToAttendingEdge, &users, &configs.UserConfig{})
	return users, err
}

// LoadAttendingEdgeFor loads the ent.Edge between the current node and the given id2 for the Attending edge.
func (event *Event) LoadAttendingEdgeFor(id2 string) (*ent.Edge, error) {
	return ent.LoadEdgeByType(event.ID, id2, EventToAttendingEdge)
}

// GenAttendingEdgeFor provides a concurrent API to load the ent.Edge between the current node and the given id2 for the Attending edge.
func (event *Event) GenLoadAttendingEdgeFor(id2 string, result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadEdgeByType(event.ID, id2, EventToAttendingEdge, edgeResultChan)
	*result = <-edgeResultChan
}

// LoadDeclinedEdges returns the Declined edges associated with the Event instance
func (event *Event) LoadDeclinedEdges() ([]*ent.Edge, error) {
	return ent.LoadEdgesByType(event.ID, EventToDeclinedEdge)
}

// GenDeclinedEdges returns the User edges associated with the Event instance
func (event *Event) GenDeclinedEdges(result *ent.EdgesResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgesResultChan := make(chan ent.EdgesResult)
	go ent.GenLoadEdgesByType(event.ID, EventToDeclinedEdge, edgesResultChan)
	*result = <-edgesResultChan
}

// GenDeclined returns the Users associated with the Event instance
func (event *Event) GenDeclined(result *UsersResult, wg *sync.WaitGroup) {
	defer wg.Done()
	var users []*User
	chanErr := make(chan error)
	go ent.GenLoadNodesByType(event.Viewer, event.ID, EventToDeclinedEdge, &users, &configs.UserConfig{}, chanErr)
	err := <-chanErr
	result.Users = users
	result.Error = err
}

// LoadDeclined returns the Users associated with the Event instance
func (event *Event) LoadDeclined() ([]*User, error) {
	var users []*User
	err := ent.LoadNodesByType(event.Viewer, event.ID, EventToDeclinedEdge, &users, &configs.UserConfig{})
	return users, err
}

// LoadDeclinedEdgeFor loads the ent.Edge between the current node and the given id2 for the Declined edge.
func (event *Event) LoadDeclinedEdgeFor(id2 string) (*ent.Edge, error) {
	return ent.LoadEdgeByType(event.ID, id2, EventToDeclinedEdge)
}

// GenDeclinedEdgeFor provides a concurrent API to load the ent.Edge between the current node and the given id2 for the Declined edge.
func (event *Event) GenLoadDeclinedEdgeFor(id2 string, result *ent.EdgeResult, wg *sync.WaitGroup) {
	defer wg.Done()
	edgeResultChan := make(chan ent.EdgeResult)
	go ent.GenLoadEdgeByType(event.ID, id2, EventToDeclinedEdge, edgeResultChan)
	*result = <-edgeResultChan
}

func (event *Event) ViewerRsvpStatus() (*EventRsvpStatus, error) {
	if !event.Viewer.HasIdentity() {
		ret := EventUnknown
		return &ret, nil
	}
	statusMap := event.RsvpStatusMap()
	edges := make(map[string]*ent.Edge)
	errs := make(map[string]error)
	for key, data := range statusMap {
		// TODO concurrent versions
		edges[key], errs[key] = ent.LoadEdgeByType(event.ID, event.Viewer.GetViewerID(), data.Edge)
	}
	for _, err := range errs {
		if err != nil {
			return nil, err
		}
	}
	var ret EventRsvpStatus
	for key, edge := range edges {
		// TODO better zero value behavior at some point
		if edge != nil && edge.ID1 != "" {
			var ok bool
			ret, ok = statusMap[key].ConstName.(EventRsvpStatus)
			if !ok {
				return nil, errors.New("error casting constant to EventRsvpStatus")
			}
			break
		}
	}
	return &ret, nil
}

func (event *Event) ViewerRsvpStatusForGQL() (*string, error) {
	enum, err := event.ViewerRsvpStatus()
	if err != nil {
		return nil, err
	}
	str := string(*enum)
	return &str, nil
}

func (event *Event) RsvpStatusMap() ent.AssocStatusMap {
	return ent.AssocStatusMap{
		"event_attending": &ent.AssociationEdgeGroupStatusInfo{
			EdgeName:          "Attending",
			Edge:              EventToAttendingEdge,
			ConstName:         EventAttending,
			UseInStatusAction: true,
		},
		"event_declined": &ent.AssociationEdgeGroupStatusInfo{
			EdgeName:          "Declined",
			Edge:              EventToDeclinedEdge,
			ConstName:         EventDeclined,
			UseInStatusAction: true,
		},
		"event_invited": &ent.AssociationEdgeGroupStatusInfo{
			EdgeName:          "Invited",
			Edge:              EventToInvitedEdge,
			ConstName:         EventInvited,
			UseInStatusAction: false,
		},
	}
}

// DBFields is used by the ent framework to load the ent from the underlying database
func (event *Event) DBFields() ent.DBFields {
	return ent.DBFields{
		"id": func(v interface{}) error {
			var err error
			event.ID, err = cast.ToUUIDString(v)
			return err
		},
		"name": func(v interface{}) error {
			var err error
			event.Name, err = cast.ToString(v)
			return err
		},
		"user_id": func(v interface{}) error {
			var err error
			event.UserID, err = cast.ToString(v)
			return err
		},
		"start_time": func(v interface{}) error {
			var err error
			event.StartTime, err = cast.ToTime(v)
			return err
		},
		"end_time": func(v interface{}) error {
			var err error
			event.EndTime, err = cast.ToNullableTime(v)
			return err
		},
		"location": func(v interface{}) error {
			var err error
			event.Location, err = cast.ToString(v)
			return err
		},
	}
}

var _ ent.Entity = &Event{}
