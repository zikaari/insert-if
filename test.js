const iif = require('.').default;

const arr = [
    'a',
    'b',
    ...iif(true, 'c0'),
    ...iif(true, () => 'c1'),
    'd'
];

console.assert(arr.length === 5, 'Failed to insert');

const arr1 = [
    'a',
    'b',
    ...iif(false, 'c0'),
    ...iif(false, () => 'c1'),
    'd'
];

console.assert(arr1.length === 3, 'Failed to skip insert');

console.log('Tests passed');