export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const intersections = [];
    for (const item of set1) {
        if (set2.has(item)) {
            intersections.push(item);
        }
    }

    return intersections;
}
