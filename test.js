const insertIf = require('./index');

const arr = [
    'a',
    'b',
    ...insertIf(true, 'c'),
    'd'
];

console.assert(arr.length === 4, 'Failed to insert');

const arr1 = [
    'a',
    'b',
    ...insertIf(false, 'c'),
    'd'
];

console.assert(arr1.length === 3, 'Failed to skip insert');

console.log('Tests passed');