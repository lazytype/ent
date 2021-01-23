// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLFieldConfigMap,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import {
  GraphQLNodeInterface,
  nodeIDEncoder,
  GraphQLEdgeConnection,
} from "@lolopinto/ent/graphql";
import {
  ContactType,
  UserToCreatedEventsConnectionType,
  UserToDeclinedEventsConnectionType,
  UserToEventsAttendingConnectionType,
  UserToFriendsConnectionType,
  UserToInvitedEventsConnectionType,
  UserToMaybeEventsConnectionType,
  UserToHostedEventsConnectionType,
} from "src/graphql/resolvers/";
import {
  User,
  UserToCreatedEventsQuery,
  UserToDeclinedEventsQuery,
  UserToEventsAttendingQuery,
  UserToFriendsQuery,
  UserToInvitedEventsQuery,
  UserToMaybeEventsQuery,
  UserToHostedEventsQuery,
} from "src/ent/";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: (): GraphQLFieldConfigMap<User, RequestContext> => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      resolve: nodeIDEncoder,
    },
    firstName: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: GraphQLNonNull(GraphQLString),
    },
    emailAddress: {
      type: GraphQLNonNull(GraphQLString),
    },
    phoneNumber: {
      type: GraphQLString,
    },
    accountStatus: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    createdEvents: {
      type: GraphQLNonNull(UserToCreatedEventsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToCreatedEventsQuery,
          args,
        );
      },
    },
    declinedEvents: {
      type: GraphQLNonNull(UserToDeclinedEventsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToDeclinedEventsQuery,
          args,
        );
      },
    },
    eventsAttending: {
      type: GraphQLNonNull(UserToEventsAttendingConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToEventsAttendingQuery,
          args,
        );
      },
    },
    friends: {
      type: GraphQLNonNull(UserToFriendsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToFriendsQuery,
          args,
        );
      },
    },
    invitedEvents: {
      type: GraphQLNonNull(UserToInvitedEventsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToInvitedEventsQuery,
          args,
        );
      },
    },
    maybeEvents: {
      type: GraphQLNonNull(UserToMaybeEventsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToMaybeEventsQuery,
          args,
        );
      },
    },
    selfContact: {
      type: ContactType,
      resolve: (user: User, args: {}) => {
        return user.loadSelfContact();
      },
    },
    userToHostedEvents: {
      type: GraphQLNonNull(UserToHostedEventsConnectionType()),
      args: {
        first: {
          description: "",
          type: GraphQLInt,
        },
        after: {
          description: "",
          type: GraphQLString,
        },
        last: {
          description: "",
          type: GraphQLInt,
        },
        before: {
          description: "",
          type: GraphQLString,
        },
      },
      resolve: (user: User, args: {}) => {
        return new GraphQLEdgeConnection(
          user.viewer,
          user,
          UserToHostedEventsQuery,
          args,
        );
      },
    },
    contacts: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ContactType))),
      resolve: (user: User, args: {}) => {
        return user.loadContacts();
      },
    },
    fullName: {
      type: GraphQLNonNull(GraphQLString),
    },
    bar: {
      type: GraphQLString,
      resolve: (user: User, args: {}) => {
        return user.getUserBar();
      },
    },
    contactSameDomain: {
      type: ContactType,
      resolve: async (user: User, args: {}) => {
        return user.getFirstContactSameDomain();
      },
    },
    contactsSameDomain: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ContactType))),
      resolve: async (user: User, args: {}) => {
        return user.getContactsSameDomain();
      },
    },
    contactsSameDomainNullable: {
      type: GraphQLList(GraphQLNonNull(ContactType)),
      resolve: async (user: User, args: {}) => {
        return user.getContactsSameDomainNullable();
      },
    },
    contactsSameDomainNullableContents: {
      type: GraphQLNonNull(GraphQLList(ContactType)),
      resolve: async (user: User, args: {}) => {
        return user.getContactsSameDomainNullableContents();
      },
    },
    contactsSameDomainNullableContentsAndList: {
      type: GraphQLList(ContactType),
      resolve: async (user: User, args: {}) => {
        return user.getContactsSameDomainNullableContentsAndList();
      },
    },
  }),
  interfaces: [GraphQLNodeInterface],
  isTypeOf(obj) {
    return obj instanceof User;
  },
});
