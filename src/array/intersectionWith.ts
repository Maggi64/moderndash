export function intersectionWith<T>(arr1: T[], arr2: T[], comparator: (a: T, b: T) => boolean): T[] {
    const intersections = new Set<T>();
    for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (comparator(item1, item2)) {
                intersections.add(item1);
                break;
            }
        }
    }

    return [...intersections];
}
