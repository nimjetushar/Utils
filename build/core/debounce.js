/**
 * add debounce time for passef function
 * @export
 * @param {Function} func Function for which debounce need to be added
 * @param {number} [timeout=300] wait period before function trigger
 * @return {Function} debounced function with wait for trigger until timeout
 */
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        const next = () => func(...args);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(next, timeout > 0 ? timeout : 300);
    };
}
//# sourceMappingURL=debounce.js.map