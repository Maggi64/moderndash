export type NoUnion<T, U = T> = T extends U ? [U] extends [T] ? T : never : never;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};