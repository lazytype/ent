// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertDate,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  EdgeType,
  Event,
  GuestGroupToGuestsQuery,
  GuestGroupToInvitedEventsQuery,
  NodeType,
} from "src/ent/internal";
import schema from "src/schema/guest_group";

const tableName = "guest_groups";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "invitation_name",
  "event_id",
];

export class GuestGroupBase {
  readonly nodeType = NodeType.GuestGroup;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly invitationName: string;
  readonly eventID: ID;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.invitationName = data.invitation_name;
    this.eventID = data.event_id;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, GuestGroupBase.loaderOptions.apply(this));
  }

  static async loadX<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, GuestGroupBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(viewer, GuestGroupBase.loaderOptions.apply(this), ...ids);
  }

  static async loadCustom<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return loadCustomEnts(
      viewer,
      GuestGroupBase.loaderOptions.apply(this),
      query,
    );
  }

  static async loadCustomData<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      GuestGroupBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await guestGroupLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await guestGroupLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends GuestGroupBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: guestGroupLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (GuestGroupBase.schemaFields != null) {
      return GuestGroupBase.schemaFields;
    }
    return (GuestGroupBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return GuestGroupBase.getSchemaFields().get(key);
  }

  queryGuestGroupToInvitedEvents(): GuestGroupToInvitedEventsQuery {
    return GuestGroupToInvitedEventsQuery.query(this.viewer, this.id);
  }

  queryGuests(): GuestGroupToGuestsQuery {
    return GuestGroupToGuestsQuery.query(this.viewer, this.id);
  }

  async loadEvent(): Promise<Event | null> {
    return loadEnt(this.viewer, this.eventID, Event.loaderOptions());
  }

  loadEventX(): Promise<Event> {
    return loadEntX(this.viewer, this.eventID, Event.loaderOptions());
  }
}

export const guestGroupLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
