## insert-if

Conditionally add elements to array using spread operators

```javascript
import iif from 'insert-if';

const arr = [
    'a',
    'b',
    // eager evaluation (only use for literal values never for computed deep properties)
    ...iif(isCForCat(), 'c'),
    // on-demand evaluation (safer for deep object properties as it prevents reference errors)
    ...iif(isThemeEnabled(), () => settings.theme.color),
    'd'
];

console.log(arr);
// > Array ['a', 'b', 'c', 'blue', 'd']
