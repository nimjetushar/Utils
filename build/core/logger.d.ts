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
export declare class Logger {
    private info;
    private warn;
    private error;
    private disable;
    /**
     * Set logger level
     *
     * @param {number} [key=this.info] logging level
     * @memberof Logger
     */
    setlevel(key?: number): void;
}
