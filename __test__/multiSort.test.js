import { sort } from '../build';

const list = [
    { name: 'z - test item', price: '99.99', priority: 0, rating: 2, reviews: 309 },
    { name: 'z - test item', price: '1.99', priority: 0, rating: 0.5, reviews: 11 },
    { name: 'y - test item', price: '99.99', priority: 1, rating: 1, reviews: 99 },
    { name: 'y - test item', price: '0', priority: 1, rating: 3.5, reviews: 394 },
    { name: 'x - test item', price: '0', priority: 2, rating: 0.5, reviews: 249 }
];

describe('sort list with multiple parameters', () => {
    it('should sort with respect to field', () => {
        let sortedList = sort(list, ['reviews']);
        expect(sortedList[0].reviews).toStrictEqual(11);
        expect(sortedList[1].reviews).toStrictEqual(99);

        sortedList = sort(list, ['+reviews']);
        expect(sortedList[0].reviews).toStrictEqual(11);

        sortedList = sort(list, ['-reviews']);
        expect(sortedList[0].reviews).toStrictEqual(394);
        expect(sortedList[1].reviews).toStrictEqual(309);
    });

    it('should sort with respect to multiple field', () => {
        let sortedList = sort(list, ['reviews', 'price']);
        expect(sortedList[0].reviews).toStrictEqual(11);
        expect(sortedList[0].price).toStrictEqual('1.99');

        sortedList = sort(list, ['price', 'reviews']);
        expect(sortedList[0].reviews).toStrictEqual(249);
        expect(sortedList[0].price).toStrictEqual('0');
    });
});
