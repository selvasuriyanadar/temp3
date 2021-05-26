import Errors from "../Logic/Validation/Errors";
import {
  doesStringDataExists,
  doesIntegerDataExists,
  doesArrayDataExists,
  isEmailValid,
  isContactValid,
} from "../Logic/Validation/CommonValidations";

export default class UserDetails {

  constructor() {
    this.email = "";
    this.data = new Data();
    this.contact_details = new ContactDetails();
    this.education_details = new EducationDetails();

    this.errors = new Errors();
  }

  validate() {
    this.errors.items.email = isEmailValid(this.email);
    return this.errors.hasErrors();
  }
}

class Data {

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.gender = "";
    this.age = null;
    this.photo = "";

    this.errors = new Errors();
  }

  validate() {
    this.errors.items.firstname = doesStringDataExists(this.firstname);
    this.errors.items.lastname = doesStringDataExists(this.lastname);
    this.errors.items.gender = doesStringDataExists(this.gender);
    this.errors.items.age = doesIntegerDataExists(this.age);
    return this.errors.hasErrors();
  }
}

class ContactDetails {

  constructor() {
    this.email = "";
    this.contact = "";
    this.country = "";
    this.district = "";

    this.errors = new Errors();
  }

  validate() {
    this.errors.items.email = isEmailValid(this.email);
    this.errors.items.contact = isContactValid(this.contact);
    this.errors.items.country = doesStringDataExists(this.country);
    this.errors.items.district = doesStringDataExists(this.district);
    return this.errors.hasErrors();
  }
}

class EducationDetails {

  constructor() {
    this.languages = [];
    this.department = "";
    this.plus2_certificate = "";
    this.ug_or_pg_certificate = "";

    this.errors = new Errors();
  }

  validate() {
    this.errors.items.languages = doesArrayDataExists(this.languages);
    this.errors.items.department = doesStringDataExists(this.department);
    return this.errors.hasErrors();
  }
}
