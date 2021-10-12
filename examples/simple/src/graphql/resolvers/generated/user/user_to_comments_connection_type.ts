/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { UserToCommentsEdge } from "../../../../ent";
import { CommentType } from "../../internal";

var connType: GraphQLConnectionType<GraphQLObjectType, UserToCommentsEdge>;

export const UserToCommentsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("UserToComments", CommentType);
  }
  return connType;
};
