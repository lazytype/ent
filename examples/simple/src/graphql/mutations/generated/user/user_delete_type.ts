/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { User } from "../../../../ent";
import DeleteUserAction from "../../../../ent/user/actions/delete_user_action";

interface customUserDeleteInput {
  userID: string;
}

interface UserDeletePayload {
  deletedUserID: string;
}

export const UserDeleteInputType = new GraphQLInputObjectType({
  name: "UserDeleteInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    userID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const UserDeletePayloadType = new GraphQLObjectType({
  name: "UserDeletePayload",
  fields: (): GraphQLFieldConfigMap<UserDeletePayload, RequestContext> => ({
    deletedUserID: {
      type: GraphQLID,
    },
  }),
});

export const UserDeleteType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customUserDeleteInput }
> = {
  type: GraphQLNonNull(UserDeletePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(UserDeleteInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<UserDeletePayload> => {
    await DeleteUserAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.userID),
    );
    return { deletedUserID: input.userID };
  },
};
