/**
 * Conditionaly inserts elements in array declaraion if followed after spread operator
 * Example: const arr = ['a', 'b', ...insertIf(v === 23, 'c')]
 * @param condition 
 * @param element 
 */
declare function insertIf<T>(condition: boolean, ...elements: T[]): T[];

export default insertIf;
