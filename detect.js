import DeviceDetector from 'device-detector-js';

/**
 * Detect browser and device.
 * @export
 * @class Detect
 */
export default class Detect {

    /**
     * Accepts user-agent and based on that detect the browser and device
     * @param {string} ua user-agent
     * @returns {Object} obj device information.
     * @returns {{type:string,name:string,version:string,engine:string,engineVersion:string}} obj.client
     * @returns {{type:string,brand:string,model:string}} obj.device
     * @returns {{name:string,version:string,platform:string}} obj.os
     * @memberof Detect#
     */
    parse(ua) {
        return new DeviceDetector().parse(ua);
    }
}
