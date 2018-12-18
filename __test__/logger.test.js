import { Logger } from "../logger";

const nativeCodeStr = "[native code]";

describe("Logger", () => {
  it("should disable warn, log feature of console", () => {
    const logger = new Logger();
    logger.setlevel(3);

    expect(console.error.toString().includes(nativeCodeStr)).toBeTruthy();
    expect(console.warn.toString().includes(nativeCodeStr)).toBeFalsy();
    expect(console.log.toString().includes(nativeCodeStr)).toBeFalsy();
  });

  it("should disable all feature of console", () => {
    const logger = new Logger();
    logger.setlevel(4);

    expect(console.error.toString().includes(nativeCodeStr)).toBeFalsy();
    expect(console.warn.toString().includes(nativeCodeStr)).toBeFalsy();
    expect(console.log.toString().includes(nativeCodeStr)).toBeFalsy();
  });
});
