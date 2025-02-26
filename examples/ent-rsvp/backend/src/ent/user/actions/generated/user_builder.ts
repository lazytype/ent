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
import { User } from "src/ent/";
import schema from "src/schema/user";

export interface UserInput {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  password?: string;
}

export interface UserAction extends Action<User> {
  getInput(): UserInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class UserBuilder implements Builder<User> {
  orchestrator: Orchestrator<User>;
  readonly placeholderID: ID;
  readonly ent = User;
  private input: UserInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: UserAction,
    public readonly existingEnt?: User | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-User`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer,
      operation: this.operation,
      tableName: "users",
      key: "id",
      loaderOptions: User.loaderOptions(),
      builder: this,
      action,
      schema,
      editedFields: () => this.getEditedFields.apply(this),
    });
  }

  getInput(): UserInput {
    return this.input;
  }

  updateInput(input: UserInput) {
    // override input
    this.input = {
      ...this.input,
      ...input,
    };
  }

  async build(): Promise<Changeset<User>> {
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

  async editedEnt(): Promise<User | null> {
    return this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<User> {
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
    addField("FirstName", fields.firstName);
    addField("LastName", fields.lastName);
    addField("EmailAddress", fields.emailAddress);
    addField("Password", fields.password);
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of FirstName. Retrieves it from the input if specified or takes it from existingEnt
  getNewFirstNameValue(): string | undefined {
    return this.input.firstName || this.existingEnt?.firstName;
  }

  // get value of LastName. Retrieves it from the input if specified or takes it from existingEnt
  getNewLastNameValue(): string | undefined {
    return this.input.lastName || this.existingEnt?.lastName;
  }

  // get value of EmailAddress. Retrieves it from the input if specified or takes it from existingEnt
  getNewEmailAddressValue(): string | undefined {
    return this.input.emailAddress || this.existingEnt?.emailAddress;
  }

  // get value of Password. Retrieves it from the input if specified or takes it from existingEnt
  getNewPasswordValue(): string | undefined {
    return this.input.password;
  }
}
