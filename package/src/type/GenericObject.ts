// The only way to make the object functions work with interfaces is to broaden the type with `any`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericObject = Record<PropertyKey, any>;