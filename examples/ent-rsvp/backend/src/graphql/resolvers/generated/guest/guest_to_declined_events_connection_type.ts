// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@lolopinto/ent/graphql";
import { EventActivityType } from "src/graphql/resolvers/internal";
import { GuestToDeclinedEventsEdge } from "src/ent/";

var connType: GraphQLConnectionType<
  GraphQLObjectType,
  GuestToDeclinedEventsEdge
>;

export const GuestToDeclinedEventsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType(
      "GuestToDeclinedEvents",
      EventActivityType,
    );
  }
  return connType;
};
