import common_validation from "./CommonValidations";

export default {
  email: {
    name: "Email Id",
  },
  password: {
    name: "Password",
    errors: {
      InvalidPassword: common_validation.password.errors.InvalidPassword,
    },
  },
};
