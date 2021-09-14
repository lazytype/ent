/**
 * Copyright whaa whaa
 * Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.
 */

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { HoursOfOperation } from "../../../../ent";
import CreateHoursOfOperationAction, {
  HoursOfOperationCreateInput,
} from "../../../../ent/hours_of_operation/actions/create_hours_of_operation_action";
import { HoursOfOperationType, dayOfWeekType } from "../../../resolvers";

interface HoursOfOperationCreatePayload {
  hoursOfOperation: HoursOfOperation;
}

export const HoursOfOperationCreateInputType = new GraphQLInputObjectType({
  name: "HoursOfOperationCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    dayOfWeek: {
      type: GraphQLNonNull(dayOfWeekType),
    },
    open: {
      type: GraphQLNonNull(GraphQLString),
    },
    close: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

export const HoursOfOperationCreatePayloadType = new GraphQLObjectType({
  name: "HoursOfOperationCreatePayload",
  fields: (): GraphQLFieldConfigMap<
    HoursOfOperationCreatePayload,
    RequestContext
  > => ({
    hoursOfOperation: {
      type: GraphQLNonNull(HoursOfOperationType),
    },
  }),
});

export const HoursOfOperationCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: HoursOfOperationCreateInput }
> = {
  type: GraphQLNonNull(HoursOfOperationCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(HoursOfOperationCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<HoursOfOperationCreatePayload> => {
    let hoursOfOperation = await CreateHoursOfOperationAction.create(
      context.getViewer(),
      {
        dayOfWeek: input.dayOfWeek,
        open: input.open,
        close: input.close,
      },
    ).saveX();
    return { hoursOfOperation: hoursOfOperation };
  },
};
