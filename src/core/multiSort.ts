function getSortMethod(..._a: any): (a: any, b: any) => number {
    const _args = Array.prototype.slice.call(arguments);

    return (a: any, b: any): number => {
        for (const x in _args) {
            let ax = a[_args[x].substring(1)],
                bx = b[_args[x].substring(1)],
                cx;

            ax = typeof ax == 'string' ? ax.toLowerCase() : ax / 1;
            bx = typeof bx == 'string' ? bx.toLowerCase() : bx / 1;

            if (_args[x].substring(0, 1) == '-') {
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

export function sort(data: any[], comparator: any) {
    const formatedComp = [];
    for (let item of comparator) {
        if (!['-', '+'].includes(item[0])) {
            item = `+${item}`;
        }
        formatedComp.push(item);
    }
    return data.sort(getSortMethod(...formatedComp));
}
