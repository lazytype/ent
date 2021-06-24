// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/snowtop-ts";
import { mustDecodeIDFromGQLID } from "@snowtop/snowtop-ts/graphql";
import { GuestGroup } from "src/ent/";
import EditGuestGroupAction, {
  GuestGroupEditInput,
} from "src/ent/guest_group/actions/edit_guest_group_action";
import { GuestGroupType } from "src/graphql/resolvers/";

interface customGuestGroupEditInput extends GuestGroupEditInput {
  guestGroupID: string;
}

interface GuestGroupEditPayload {
  guestGroup: GuestGroup;
}

export const GuestGroupEditInputType = new GraphQLInputObjectType({
  name: "GuestGroupEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    guestGroupID: {
      type: GraphQLNonNull(GraphQLID),
    },
    invitationName: {
      type: GraphQLString,
    },
  }),
});

export const GuestGroupEditPayloadType = new GraphQLObjectType({
  name: "GuestGroupEditPayload",
  fields: (): GraphQLFieldConfigMap<GuestGroupEditPayload, RequestContext> => ({
    guestGroup: {
      type: GraphQLNonNull(GuestGroupType),
    },
  }),
});

export const GuestGroupEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customGuestGroupEditInput }
> = {
  type: GraphQLNonNull(GuestGroupEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(GuestGroupEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<GuestGroupEditPayload> => {
    let guestGroup = await EditGuestGroupAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.guestGroupID),
      {
        invitationName: input.invitationName,
      },
    );
    return { guestGroup: guestGroup };
  },
};
