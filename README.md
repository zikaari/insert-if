## insert-if

Conditionally add elements to array using spread operators

```javascript
import insertIf from 'insert-if';

const arr = [
    'a',
    'b',
    ...insertIf(isCForCat(), 'c'),
    'd'
];

console.log(arr);
// > Array ['a', 'b', 'c', 'd']
