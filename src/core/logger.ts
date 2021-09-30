import { noop } from './noop';

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
export class Logger {

  private info = 1;
  private warn = 2;
  private error = 3;
  private disable = 4;

  /**
   * Set logger level
   *
   * @param {number} [key=this.info] logging level
   * @memberof Logger
   */
  setlevel(key: number = this.info) {
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
