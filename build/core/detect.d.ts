import DeviceDetector from 'device-detector-js';
/**
 * Detect browser and device.
 * @export
 * @class Detect
 */
export declare class Detect {
    /**
     * Accepts user-agent and based on that detect the browser and device
     *
     * @param {string} ua user-agent
     * @return {*}  {DeviceDetector.DeviceDetectorResult}
     * @memberof Detect
     */
    parse(ua: string): DeviceDetector.DeviceDetectorResult;
}
