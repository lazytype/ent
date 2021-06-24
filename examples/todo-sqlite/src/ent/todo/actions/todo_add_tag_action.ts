import { AlwaysAllowPrivacyPolicy } from "@snowtop/snowtop-ts";
import { TodoAddTagActionBase } from "src/ent/todo/actions/generated/todo_add_tag_action_base";

export default class TodoAddTagAction extends TodoAddTagActionBase {
  getPrivacyPolicy() {
    return AlwaysAllowPrivacyPolicy;
  }
}
