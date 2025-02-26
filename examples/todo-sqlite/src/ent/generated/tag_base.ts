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
import { Account, EdgeType, NodeType, TagToTodosQuery } from "src/ent/internal";
import schema from "src/schema/tag";

const tableName = "tags";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "display_name",
  "canonical_name",
  "owner_id",
];

export class TagBase {
  readonly nodeType = NodeType.Tag;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly displayName: string;
  readonly canonicalName: string;
  readonly ownerID: ID;

  constructor(public viewer: Viewer, protected data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.displayName = data.display_name;
    this.canonicalName = data.canonical_name;
    this.ownerID = data.owner_id;
  }

  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return (await loadEnt(
      viewer,
      id,
      TagBase.loaderOptions.apply(this),
    )) as T | null;
  }

  static async loadX<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return (await loadEntX(viewer, id, TagBase.loaderOptions.apply(this))) as T;
  }

  static async loadMany<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return (await loadEnts(
      viewer,
      TagBase.loaderOptions.apply(this),
      ...ids,
    )) as T[];
  }

  static async loadCustom<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return (await loadCustomEnts(
      viewer,
      TagBase.loaderOptions.apply(this),
      query,
    )) as T[];
  }

  static async loadCustomData<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(TagBase.loaderOptions.apply(this), query, context);
  }

  static async loadRawData<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return tagLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await tagLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends TagBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName,
      fields,
      ent: this,
      loaderFactory: tagLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (TagBase.schemaFields != null) {
      return TagBase.schemaFields;
    }
    return (TagBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return TagBase.getSchemaFields().get(key);
  }

  queryTodos(): TagToTodosQuery {
    return TagToTodosQuery.query(this.viewer, this.id);
  }

  async loadOwner(): Promise<Account | null> {
    return loadEnt(this.viewer, this.ownerID, Account.loaderOptions());
  }

  loadOwnerX(): Promise<Account> {
    return loadEntX(this.viewer, this.ownerID, Account.loaderOptions());
  }
}

export const tagLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
