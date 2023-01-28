/**
 * Creates a new array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @example
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 * @category Array
 * @param array - The array or object to shuffle.
 * @returns Returns the new shuffled array.
 */

export function shuffle<TInput>(array: TInput[]): TInput[] {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
    let temporaryValue: TInput;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = shuffledArray[currentIndex];
        shuffledArray[currentIndex] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
}
