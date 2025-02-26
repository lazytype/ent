// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { Ent, ID, Viewer } from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  Orchestrator,
  WriteOperation,
  saveBuilder,
  saveBuilderX,
} from "@snowtop/ent/action";
import { Event, User } from "src/ent/";
import schema from "src/schema/event";

export interface EventInput {
  name?: string;
  slug?: string | null;
  creatorID?: ID | Builder<User>;
}

export interface EventAction extends Action<Event> {
  getInput(): EventInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class EventBuilder implements Builder<Event> {
  orchestrator: Orchestrator<Event>;
  readonly placeholderID: ID;
  readonly ent = Event;
  private input: EventInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: EventAction,
    public readonly existingEnt?: Event | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-Event`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer,
      operation: this.operation,
      tableName: "events",
      key: "id",
      loaderOptions: Event.loaderOptions(),
      builder: this,
      action,
      schema,
      editedFields: () => this.getEditedFields.apply(this),
    });
  }

  getInput(): EventInput {
    return this.input;
  }

  updateInput(input: EventInput) {
    // override input
    this.input = {
      ...this.input,
      ...input,
    };
  }

  async build(): Promise<Changeset<Event>> {
    return this.orchestrator.build();
  }

  async valid(): Promise<boolean> {
    return this.orchestrator.valid();
  }

  async validX(): Promise<void> {
    return this.orchestrator.validX();
  }

  async save(): Promise<void> {
    await saveBuilder(this);
  }

  async saveX(): Promise<void> {
    await saveBuilderX(this);
  }

  async editedEnt(): Promise<Event | null> {
    return this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<Event> {
    return this.orchestrator.editedEntX();
  }

  private getEditedFields(): Map<string, any> {
    const fields = this.input;

    const result = new Map<string, any>();

    const addField = function (key: string, value: any) {
      if (value !== undefined) {
        result.set(key, value);
      }
    };
    addField("Name", fields.name);
    addField("Slug", fields.slug);
    addField("creatorID", fields.creatorID);
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of Name. Retrieves it from the input if specified or takes it from existingEnt
  getNewNameValue(): string | undefined {
    return this.input.name || this.existingEnt?.name;
  }

  // get value of Slug. Retrieves it from the input if specified or takes it from existingEnt
  getNewSlugValue(): string | null | undefined {
    return this.input.slug || this.existingEnt?.slug;
  }

  // get value of creatorID. Retrieves it from the input if specified or takes it from existingEnt
  getNewCreatorIDValue(): ID | Builder<User> | undefined {
    return this.input.creatorID || this.existingEnt?.creatorID;
  }
}
