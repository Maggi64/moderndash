export function difference(array: unknown[], ...values: unknown[]) {
    return array.filter(value => !values.includes(value));
}
