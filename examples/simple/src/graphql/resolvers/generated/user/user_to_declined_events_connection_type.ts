// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/snowtop-ts/graphql";
import { UserToDeclinedEventsEdge } from "src/ent/";
import { EventType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<
  GraphQLObjectType,
  UserToDeclinedEventsEdge
>;

export const UserToDeclinedEventsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("UserToDeclinedEvents", EventType);
  }
  return connType;
};
