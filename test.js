const insertIf = require('./index');

const arr = [
    'a',
    'b',
    ...insertIf(true, 'c'),
    'd'
];

console.assert(arr.length === 4, 'Failed to insert an element');

const arr1 = [
    'a',
    'b',
    ...insertIf(false, 'c'),
    'd'
];

console.assert(arr1.length === 3, 'Failed to skip insert');

const arr2 = [
    'a',
    'b',
    ...insertIf(true, 'c', 'd', 'e')
];

console.assert(arr2.length === 5, 'Failed to insert 3 elements');

console.log('Tests passed');
