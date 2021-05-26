// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  Action,
  Builder,
  WriteOperation,
  Changeset,
} from "@lolopinto/ent/action";
import {
  Viewer,
  ID,
  AllowIfViewerHasIdentityPrivacyPolicy,
  PrivacyPolicy,
} from "@lolopinto/ent";
import { GuestGroup, Event } from "src/ent/";
import {
  GuestGroupBuilder,
  GuestGroupInput,
} from "src/ent/guest_group/actions/guest_group_builder";

interface customGuestInput {
  name: string;
  emailAddress?: string | null;
  title?: string | null;
}

export interface GuestGroupCreateInput {
  invitationName: string;
  eventID: ID | Builder<Event>;
  guests?: customGuestInput[] | null;
}

export class CreateGuestGroupActionBase implements Action<GuestGroup> {
  public readonly builder: GuestGroupBuilder;
  public readonly viewer: Viewer;
  protected input: GuestGroupCreateInput;

  constructor(viewer: Viewer, input: GuestGroupCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new GuestGroupBuilder(
      this.viewer,
      WriteOperation.Insert,
      this,
    );
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): GuestGroupInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<GuestGroup>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<GuestGroup | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<GuestGroup> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends CreateGuestGroupActionBase>(
    this: new (viewer: Viewer, input: GuestGroupCreateInput) => T,
    viewer: Viewer,
    input: GuestGroupCreateInput,
  ): CreateGuestGroupActionBase {
    return new this(viewer, input);
  }
}
