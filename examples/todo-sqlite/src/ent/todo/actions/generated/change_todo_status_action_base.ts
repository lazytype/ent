// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { Todo } from "src/ent/";
import {
  TodoBuilder,
  TodoInput,
} from "src/ent/todo/actions/generated/todo_builder";

export interface ChangeTodoStatusInput {
  completed?: boolean;
}

export class ChangeTodoStatusActionBase implements Action<Todo> {
  public readonly builder: TodoBuilder;
  public readonly viewer: Viewer;
  protected input: ChangeTodoStatusInput;
  protected todo: Todo;

  constructor(viewer: Viewer, todo: Todo, input: ChangeTodoStatusInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new TodoBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      todo,
    );
    this.todo = todo;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): TodoInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<Todo>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<Todo | null> {
    await this.builder.save();
    return this.builder.editedEnt();
  }

  async saveX(): Promise<Todo> {
    await this.builder.saveX();
    return this.builder.editedEntX();
  }

  static create<T extends ChangeTodoStatusActionBase>(
    this: new (viewer: Viewer, todo: Todo, input: ChangeTodoStatusInput) => T,
    viewer: Viewer,
    todo: Todo,
    input: ChangeTodoStatusInput,
  ): T {
    return new this(viewer, todo, input);
  }

  static async saveXFromID<T extends ChangeTodoStatusActionBase>(
    this: new (viewer: Viewer, todo: Todo, input: ChangeTodoStatusInput) => T,
    viewer: Viewer,
    id: ID,
    input: ChangeTodoStatusInput,
  ): Promise<Todo> {
    const todo = await Todo.loadX(viewer, id);
    return new this(viewer, todo, input).saveX();
  }
}
