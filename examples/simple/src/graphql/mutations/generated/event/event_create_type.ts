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
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { GraphQLTime, mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { Event } from "../../../../ent";
import CreateEventAction, {
  EventCreateInput,
} from "../../../../ent/event/actions/create_event_action";
import { EventType } from "../../../resolvers";

interface customEventCreateInput extends EventCreateInput {
  creatorID: string;
}

interface EventCreatePayload {
  event: Event;
}

export const EventCreateInputType = new GraphQLInputObjectType({
  name: "EventCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    creatorID: {
      type: GraphQLNonNull(GraphQLID),
    },
    startTime: {
      type: GraphQLNonNull(GraphQLTime),
    },
    endTime: {
      type: GraphQLTime,
    },
    eventLocation: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export const EventCreatePayloadType = new GraphQLObjectType({
  name: "EventCreatePayload",
  fields: (): GraphQLFieldConfigMap<EventCreatePayload, RequestContext> => ({
    event: {
      type: GraphQLNonNull(EventType),
    },
  }),
});

export const EventCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customEventCreateInput }
> = {
  type: GraphQLNonNull(EventCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(EventCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<EventCreatePayload> => {
    let event = await CreateEventAction.create(context.getViewer(), {
      name: input.name,
      creatorID: mustDecodeIDFromGQLID(input.creatorID),
      startTime: input.startTime,
      endTime: input.endTime,
      location: input.location,
    }).saveX();
    return { event: event };
  },
};
