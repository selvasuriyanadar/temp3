import Errors from "../Logic/Validation/Errors";
import {
  isEmailValid,
  isPasswordValid,
} from "../Logic/Validation/CommonValidations";

export default class PassData {

  constructor() {
    this.email = "";
    this.password = "";

    this.errors = new Errors();
  }

  validate() {
    this.errors.items.email = isEmailValid(this.email);
    this.errors.items.password = isPasswordValid(this.password);
    return this.errors.hasErrors();
  }
}
