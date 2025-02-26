/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@snowtop/ent";
import {
  EdgeType,
  Event,
  EventToAttendingEdge,
  EventToDeclinedEdge,
  EventToHostsEdge,
  EventToInvitedEdge,
  EventToMaybeEdge,
  User,
  UserToCommentsQuery,
  UserToCreatedEventsQuery,
  UserToDeclinedEventsQuery,
  UserToEventsAttendingQuery,
  UserToFriendsQuery,
  UserToHostedEventsQuery,
  UserToInvitedEventsQuery,
  UserToLikersQuery,
  UserToLikesQuery,
  UserToMaybeEventsQuery,
  UserToSelfContactQuery,
} from "../internal";

export const eventToAttendingCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.EventToAttending);
export const eventToAttendingDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.EventToAttending,
  () => EventToAttendingEdge,
);

export const eventToDeclinedCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.EventToDeclined);
export const eventToDeclinedDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.EventToDeclined,
  () => EventToDeclinedEdge,
);

export const eventToHostsCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.EventToHosts,
);
export const eventToHostsDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.EventToHosts,
  () => EventToHostsEdge,
);

export const eventToInvitedCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.EventToInvited,
);
export const eventToInvitedDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.EventToInvited,
  () => EventToInvitedEdge,
);

export const eventToMaybeCountLoaderFactory = new AssocEdgeCountLoaderFactory(
  EdgeType.EventToMaybe,
);
export const eventToMaybeDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.EventToMaybe,
  () => EventToMaybeEdge,
);

export class EventToAttendingQueryBase extends AssocEdgeQueryBase<
  Event,
  User,
  EventToAttendingEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Event>) {
    super(
      viewer,
      src,
      eventToAttendingCountLoaderFactory,
      eventToAttendingDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends EventToAttendingQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Event>,
  ): T {
    return new this(viewer, src);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}

export class EventToDeclinedQueryBase extends AssocEdgeQueryBase<
  Event,
  User,
  EventToDeclinedEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Event>) {
    super(
      viewer,
      src,
      eventToDeclinedCountLoaderFactory,
      eventToDeclinedDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends EventToDeclinedQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Event>,
  ): T {
    return new this(viewer, src);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}

export class EventToHostsQueryBase extends AssocEdgeQueryBase<
  Event,
  User,
  EventToHostsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Event>) {
    super(
      viewer,
      src,
      eventToHostsCountLoaderFactory,
      eventToHostsDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends EventToHostsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Event>,
  ): T {
    return new this(viewer, src);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}

export class EventToInvitedQueryBase extends AssocEdgeQueryBase<
  Event,
  User,
  EventToInvitedEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Event>) {
    super(
      viewer,
      src,
      eventToInvitedCountLoaderFactory,
      eventToInvitedDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends EventToInvitedQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Event>,
  ): T {
    return new this(viewer, src);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}

export class EventToMaybeQueryBase extends AssocEdgeQueryBase<
  Event,
  User,
  EventToMaybeEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<Event>) {
    super(
      viewer,
      src,
      eventToMaybeCountLoaderFactory,
      eventToMaybeDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends EventToMaybeQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<Event>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<Event>,
  ): T {
    return new this(viewer, src);
  }

  queryComments(): UserToCommentsQuery {
    return UserToCommentsQuery.query(this.viewer, this);
  }

  queryCreatedEvents(): UserToCreatedEventsQuery {
    return UserToCreatedEventsQuery.query(this.viewer, this);
  }

  queryDeclinedEvents(): UserToDeclinedEventsQuery {
    return UserToDeclinedEventsQuery.query(this.viewer, this);
  }

  queryEventsAttending(): UserToEventsAttendingQuery {
    return UserToEventsAttendingQuery.query(this.viewer, this);
  }

  queryFriends(): UserToFriendsQuery {
    return UserToFriendsQuery.query(this.viewer, this);
  }

  queryInvitedEvents(): UserToInvitedEventsQuery {
    return UserToInvitedEventsQuery.query(this.viewer, this);
  }

  queryLikers(): UserToLikersQuery {
    return UserToLikersQuery.query(this.viewer, this);
  }

  queryLikes(): UserToLikesQuery {
    return UserToLikesQuery.query(this.viewer, this);
  }

  queryMaybeEvents(): UserToMaybeEventsQuery {
    return UserToMaybeEventsQuery.query(this.viewer, this);
  }

  querySelfContact(): UserToSelfContactQuery {
    return UserToSelfContactQuery.query(this.viewer, this);
  }

  queryUserToHostedEvents(): UserToHostedEventsQuery {
    return UserToHostedEventsQuery.query(this.viewer, this);
  }
}
