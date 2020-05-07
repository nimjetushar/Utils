export class Logger {
  constructor() {
    this.info = 1;
    this.warn = 2;
    this.error = 3;
    this.disable = 4;
  }

  _noop() {}

  setlevel(key = this.info) {
    if (!key) {
      throw new Error('Logger level is required');
    }

    switch (key) {
      case this.disable:
        console.error = this._noop;
      case this.error:
        console.warn = this._noop;
      case this.warn:
        console.log = this._noop;
      case this.info:
        break;
      default:
        throw new Error('invalid choice');
    }
  }
}
