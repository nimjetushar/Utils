import { noop } from './core/noop';

/**
 * Enable / disable logging across various environment
 * new Logger().setlevel(level) where level are :-
 * - 1 -> All console methods are enabled.
 * - 2 -> console log and info methods are diabled while other works as expected
 * - 3 -> console.error method will be enabled while other are disabled
 * - 4 -> All console methods are disabled
 * @export
 * @class Logger
 */
export default class Logger {
  constructor() {
    this.info = 1;
    this.warn = 2;
    this.error = 3;
    this.disable = 4;
  }

  /**
   * Set logger level
   * @param {number} [key=this.info] logging level
   * @returns {void}
   * @memberof Logger#
   */
  setlevel(key = this.info) {
    if (!key) {
      throw new Error('Logger level is required');
    }

    switch (key) {
      case this.disable:
        console.error = noop;
      case this.error:
        console.warn = noop;
      case this.warn:
        console.info = noop;
        console.log = noop;
      case this.info:
        break;
      default:
        throw new Error('invalid choice');
    }
  }
}
