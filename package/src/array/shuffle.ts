/**
 * Creates a new array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @example
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 * @param array The array or object to shuffle.
 * @returns Returns the new shuffled array.
 */

export function shuffle<TArr>(array: TArr[]): TArr[] {
    const shuffledArray = [...array];

    const lastIndex = shuffledArray.length - 1;
    let index = -1;

    while (++index < shuffledArray.length) {
        const randomIndex = Math.floor(Math.random() * (lastIndex - index + 1)) + index;
        const value = shuffledArray[randomIndex];

        shuffledArray[randomIndex] = shuffledArray[index];
        shuffledArray[index] = value;
    }
    
    return shuffledArray;
}
