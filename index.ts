/**
 * Conditionaly inserts elements in array declaraion if followed after spread operator
 * Example: const arr = ['a', 'b', ...iif(v === 23, 'c')]
 * 
 * @example
 * import iif from 'insert-if'
 * 
 * // eager evalulation mode (not recommended for non-literal values)
 * const arr = [
 * 	'a',
 * 	'b',
 * 	...iif(isColorEnabled(), p.settings.color)
 * ]
 * 
 * // > ['a', 'b', 'red'] (if `p.settings` was null it'd have been a reference error even if `isColorEnabled` was false)
 * 
 * 
 * // deferred mode (recommended for computed values like deep within an object)
 * const arr = [
 * 	'a',
 * 	'b',
 * 	...iif(isColorEnabled(), () => p.settings.color)
 * ]
 * 
 * // > ['a', 'b', 'c'] (safer becuase if the expression was false, the function that returns `p.settings.color` would never be called)
 * 
 * 
 */
export default function <T>(condition: boolean, ...elements: (T | (() => T))[]): T[] {
	return condition
		? elements.map(e => typeof e === 'function' ? (e as Function)() : e)
		: [];
}
