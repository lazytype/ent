// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
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
import { Event, Guest, NodeType } from "src/ent/internal";
import schema from "src/schema/guest_data";

const tableName = "guest_data";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "guest_id",
  "event_id",
  "dietary_restrictions",
];

export class GuestDataBase {
  readonly nodeType = NodeType.GuestData;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly guestID: ID;
  readonly eventID: ID;
  readonly dietaryRestrictions: string;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.guestID = data.guest_id;
    this.eventID = data.event_id;
    this.dietaryRestrictions = data.dietary_restrictions;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      GuestDataBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(
      viewer,
      id,
      GuestDataBase.loaderOptions.apply(this),
    )) as T;
  }

  static async loadMany<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      GuestDataBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      GuestDataBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      GuestDataBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return guestDataLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await guestDataLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends GuestDataBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: guestDataLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (GuestDataBase.schemaFields != null) {
      return GuestDataBase.schemaFields;
    }
    return (GuestDataBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return GuestDataBase.getSchemaFields().get(key);
  }

  async loadEvent(): Promise<Event | null> {
    return loadEnt(this.viewer, this.eventID, Event.loaderOptions());
  }

  loadEventX(): Promise<Event> {
    return loadEntX(this.viewer, this.eventID, Event.loaderOptions());
  }

  async loadGuest(): Promise<Guest | null> {
    return loadEnt(this.viewer, this.guestID, Guest.loaderOptions());
  }

  loadGuestX(): Promise<Guest> {
    return loadEntX(this.viewer, this.guestID, Guest.loaderOptions());
  }
}

export const guestDataLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
