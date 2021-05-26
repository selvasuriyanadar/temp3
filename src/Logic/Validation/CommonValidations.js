export function doesStringDataExists(data) {
  const errors = [];
  
  if (data === "") {
    errors.push("NoData");
  }
  return errors;
}

export function doesIntegerDataExists(data) {
  const errors = [];
  
  if (data == null) {
    errors.push("NoData");
  }
  return errors;
}

export function doesBooleanDataExists(data) {
  const errors = [];
  
  if (!data) {
    errors.push("NoData");
  }
  return errors;
}

export function doesArrayDataExists(data) {
  const errors = [];
  
  if (data.length === 0) {
    errors.push("NoData");
  }
  return errors;
}

export function isEmailValid(email) {
  const errors = doesStringDataExists(email);

  if (errors.length === 0) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.push("InvalidData");
    }
  }
  return errors;
}

export function isContactValid(contact) {
  const errors = doesStringDataExists(contact);

  if (errors.length === 0) {
    if (!/^\d{10}$/.test(contact)) {
      errors.push("InvalidData");
    }
  }
  return errors;
}

export function isPasswordValid(password) {
  const errors = doesStringDataExists(password);

  if (errors.length === 0) {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
      errors.push("InvalidPassword");
    }
  }
  return errors;
}
