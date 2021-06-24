import { AlwaysAllowPrivacyPolicy } from "@snowtop/snowtop-ts";
import { TodoRemoveTagActionBase } from "src/ent/todo/actions/generated/todo_remove_tag_action_base";

export default class TodoRemoveTagAction extends TodoRemoveTagActionBase {
  getPrivacyPolicy() {
    return AlwaysAllowPrivacyPolicy;
  }
}
