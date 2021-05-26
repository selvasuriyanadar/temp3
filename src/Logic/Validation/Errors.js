export default class Errors {

  constructor() {
    this.items = {};
  }

  hasErrors() {
    let noerror = true;
    for (const val of Object.values(this.items)) {
      if (val.length !== 0) noerror &= false;
    }
    return noerror;
  }
}
