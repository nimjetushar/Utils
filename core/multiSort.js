/* eslint-disable eqeqeq, consistent-return */

function getSortMethod() {
    const _args = Array.prototype.slice.call(arguments);
    return (a, b) => {
        for (const x in _args) {
            let ax = a[_args[x].substring(1)],
                bx = b[_args[x].substring(1)],
                cx;

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
    };
}

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
