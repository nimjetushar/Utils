/**
 * add debounce time for passef function
 * @export
 * @param {Function} func Function for which debounce need to be added
 * @param {number} [timeout=300] wait period before function trigger
 * @return {Function} debounced function with wait for trigger until timeout
 */
export declare function debounce(func: (...args: any[]) => any, timeout?: number): (...args: any[]) => void;
