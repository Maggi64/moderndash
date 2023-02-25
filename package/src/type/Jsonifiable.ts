type JsonifiableObject = { [Key in string]?: Jsonifiable } | { toJSON: () => Jsonifiable };
type JsonifiableArray = readonly Jsonifiable[];
type JsonPrimitive = string | number | boolean | null;

/**
 * Matches a value that can be losslessly converted to JSON.  
 * Can be used to type values that you expect to pass to `JSON.stringify`.
 * 
 * `undefined` is allowed in object fields (for example, `{a?: number}`) as a special case even though `JSON.stringify({a: undefined})` is `{}` because it makes this class more widely useful and checking for undefined-but-present values is likely an anti-pattern.
 * 
 * @example
 * ```typescript
 * const error: Jsonifiable = {
 *     map: new Map([['a', 1]]),
 * };
 * // => TypeError: Map is not a valid JSON value.
 * 
 * JSON.stringify(error);
 * // => {"map": {}}
 * 
 * const good: Jsonifiable = {
 *     number: 3,
 *     date: new Date(),
 *     missing: undefined,
 * }
 * 
 * JSON.stringify(good);
 * //=> {"number": 3, "date": "2022-10-17T22:22:35.920Z"}
 * ```
*/
export type Jsonifiable = JsonPrimitive | JsonifiableObject | JsonifiableArray;