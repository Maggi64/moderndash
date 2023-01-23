/**
 * This method is like `uniq` except that it accepts `comparator` which is invoked to compare elements of `array`.
 * The order of result values is determined by the order they occur in the array.
 *
 * @category Array
 * @param array - The array to inspect.
 * @param comparator - The comparator invoked per element.
 * @returns Returns the new duplicate free array.
 * @example
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * uniqWith(isEqual, objects)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */

export function uniqWith<TInput>(array: TInput[], comparator: (a: TInput, b: TInput) => boolean): TInput[] {
    return array.filter((value, index, self) => {
        return self.findIndex(otherValue => comparator(value, otherValue)) === index;
    });
}
