## insert-if

Conditionally add elements to array using spread operators

### Getting start

```bash
$ npm install insert-if
```

### Usage

* Conditionally add an element

```javascript
import insertIf from 'insert-if';

const isCForCat = () => true;
const arr = [
    'a',
    'b',
    ...insertIf(isCForCat(), 'c'),
    'd'
];

console.log(arr);
// > Array ['a', 'b', 'c', 'd']

* Conditionally add multiple elements

```javascript
import insertIf from 'insert-if';

const isCForCat = () => true;
const arr = [
    'a',
    'b',
    ...insertIf(isCForCat(), 'c', 'd', 'e')
];

console.log(arr);
// > Array ['a', 'b', 'c', 'd', 'e']
