/**
 * Creates a new array of shuffled values, using the Fisher-Yates-Durstenfeld Shuffle algorithm.
 *
 * @example
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 * @param array Array to shuffle
 * @template TElem The type of the array elements
 * @returns A new shuffled array
 */

export function shuffle<TElem>(array: readonly TElem[]): TElem[] {
    const shuffledArray = [...array];
  
    for (let index = shuffledArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledArray[index], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[index]];
    }
  
    return shuffledArray;
}