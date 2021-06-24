// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLEnumType,
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
import {
  convertFromGQLEnum,
  mustDecodeIDFromGQLID,
} from "@snowtop/snowtop-ts/graphql";
import { EventActivity } from "src/ent/";
import EditEventActivityRsvpStatusAction, {
  EditEventActivityRsvpStatusInput,
} from "src/ent/event_activity/actions/edit_event_activity_rsvp_status_action";
import {
  EventActivityRsvpStatusInput,
  getEventActivityRsvpStatusInputValues,
} from "src/ent/event_activity/actions/generated/edit_event_activity_rsvp_status_action_base";
import { EventActivityType } from "src/graphql/resolvers/";

interface customEventActivityRsvpStatusEditInput
  extends EditEventActivityRsvpStatusInput {
  eventActivityID: string;
  guestID: string;
}

interface EventActivityRsvpStatusEditPayload {
  eventActivity: EventActivity;
}

export const EventActivityRsvpStatusInputType = new GraphQLEnumType({
  name: "EventActivityRsvpStatusInput",
  values: {
    ATTENDING: {
      value: "ATTENDING",
    },
    DECLINED: {
      value: "DECLINED",
    },
  },
});

export const EventActivityRsvpStatusEditInputType = new GraphQLInputObjectType({
  name: "EventActivityRsvpStatusEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    eventActivityID: {
      type: GraphQLNonNull(GraphQLID),
    },
    rsvpStatus: {
      type: GraphQLNonNull(EventActivityRsvpStatusInputType),
    },
    guestID: {
      type: GraphQLNonNull(GraphQLID),
    },
    dietaryRestrictions: {
      type: GraphQLString,
    },
  }),
});

export const EventActivityRsvpStatusEditPayloadType = new GraphQLObjectType({
  name: "EventActivityRsvpStatusEditPayload",
  fields: (): GraphQLFieldConfigMap<
    EventActivityRsvpStatusEditPayload,
    RequestContext
  > => ({
    eventActivity: {
      type: GraphQLNonNull(EventActivityType),
    },
  }),
});

export const EventActivityRsvpStatusEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customEventActivityRsvpStatusEditInput }
> = {
  type: GraphQLNonNull(EventActivityRsvpStatusEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(EventActivityRsvpStatusEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<EventActivityRsvpStatusEditPayload> => {
    let eventActivity = await EditEventActivityRsvpStatusAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.eventActivityID),
      {
        rsvpStatus: convertFromGQLEnum(
          input.rsvpStatus,
          getEventActivityRsvpStatusInputValues(),
          EventActivityRsvpStatusInputType.getValues(),
        ) as EventActivityRsvpStatusInput,
        guestID: mustDecodeIDFromGQLID(input.guestID),
        dietaryRestrictions: input.dietaryRestrictions,
      },
    );
    return { eventActivity: eventActivity };
  },
};
