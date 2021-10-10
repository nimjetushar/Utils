/**
 * Creates deep copy of all the passed object merging all the data into 1st parameter ( target object ).
 * @param {T} target - An object that will receive the new properties if additional objects are passed in.
 * @param {T} source1 - An object containing additional properties to merge in.
 * @param {Array<T>} sourceN - Additional objects containing properties to merge in.
 * @returns {T} Deep copied object containing all the properties of passed parameters.
 */
export declare const deepCopy: (...args: any[]) => boolean;
