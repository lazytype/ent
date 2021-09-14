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
import { Address } from "../../../../ent";
import CreateAddressAction, {
  AddressCreateInput,
} from "../../../../ent/address/actions/create_address_action";
import { AddressType } from "../../../resolvers";

interface AddressCreatePayload {
  address: Address;
}

export const AddressCreateInputType = new GraphQLInputObjectType({
  name: "AddressCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    streetName: {
      type: GraphQLNonNull(GraphQLString),
    },
    city: {
      type: GraphQLNonNull(GraphQLString),
    },
    state: {
      type: GraphQLNonNull(GraphQLString),
    },
    zip: {
      type: GraphQLNonNull(GraphQLString),
    },
    apartment: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
  }),
});

export const AddressCreatePayloadType = new GraphQLObjectType({
  name: "AddressCreatePayload",
  fields: (): GraphQLFieldConfigMap<AddressCreatePayload, RequestContext> => ({
    address: {
      type: GraphQLNonNull(AddressType),
    },
  }),
});

export const AddressCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: AddressCreateInput }
> = {
  type: GraphQLNonNull(AddressCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(AddressCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<AddressCreatePayload> => {
    let address = await CreateAddressAction.create(context.getViewer(), {
      streetName: input.streetName,
      city: input.city,
      state: input.state,
      zip: input.zip,
      apartment: input.apartment,
      country: input.country,
    }).saveX();
    return { address: address };
  },
};
