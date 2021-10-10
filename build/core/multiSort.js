// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortMethod(..._a) {
    // eslint-disable-next-line prefer-rest-params
    const _args = Array.prototype.slice.call(arguments);
    return (a, b) => {
        for (const x in _args) {
            let ax = a[_args[x].substring(1)], bx = b[_args[x].substring(1)], cx;
            ax = typeof ax == "string" ? ax.toLowerCase() : ax / 1;
            bx = typeof bx == "string" ? bx.toLowerCase() : bx / 1;
            if (_args[x].substring(0, 1) == "-") {
                cx = ax;
                ax = bx;
                bx = cx;
            }
            if (ax != bx) {
                return ax < bx ? -1 : 1;
            }
        }
        return 0;
    };
}
/**
 * sort array based on multiple criteria
 *
 * @export
 * @template T
 * @param {T[]} data
 * @param {string[]} comparator
 * @return {*}  {T[]}
 */
export function sort(data, comparator) {
    const formatedComp = [];
    for (let item of comparator) {
        if (!["-", "+"].includes(item[0])) {
            item = `+${item}`;
        }
        formatedComp.push(item);
    }
    return data.sort(getSortMethod(...formatedComp));
}
//# sourceMappingURL=multiSort.js.map