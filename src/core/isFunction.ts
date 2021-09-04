/**
 * Identifies if passed argument is function or not.
 * @param {*} param Parameter which needs to be validated.
 * @returns {boolean} return true is parameter is function.
 */
function isFunction(param: any) {
    return typeof param === 'function' || false;
}

export { isFunction };
