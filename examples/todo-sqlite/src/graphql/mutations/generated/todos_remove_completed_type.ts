// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLNonNull,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { AccountType } from "src/graphql/resolvers/";
import { TodosResolver } from "../todo/todo_resolver";

interface todosRemoveCompletedArgs {
  accountID: any;
}

export const TodosRemoveCompletedType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  todosRemoveCompletedArgs
> = {
  type: GraphQLNonNull(AccountType),
  args: {
    accountID: {
      description: "",
      type: GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _source,
    args,
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ) => {
    const r = new TodosResolver();
    return r.removeCompletedTodos(mustDecodeIDFromGQLID(args.accountID));
  },
};
