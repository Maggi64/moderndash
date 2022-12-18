export function intersectionWith<T>(comparator: (a: T, b: T) => boolean, ...arrays: T[][]): T[] {
    const intersection: T[] = [];

    const [firstArray, ...restArrays] = arrays;

    firstArray.forEach(element => {
        if (restArrays.every(array => array.some(item => comparator(item, element)))) {
            intersection.push(element);
        }
    });

    return intersection;
}
