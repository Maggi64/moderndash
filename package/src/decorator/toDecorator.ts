import type { GenericFunction } from '@helpers/types.js';

type Tail<T extends unknown[]> = T extends [infer _Head, ...infer Tail] ? Tail : never;

/**
 * 
 * 
 * @example
 * const caution = () => console.log("Caution!");
 * 
 * @param func
 * @returns A decorator function that can be used to decorate a method.
 */

export function toDecorator<TFunc extends GenericFunction<TFunc>>(func: TFunc) {
    return function (...args: Tail<Parameters<TFunc>>) {
        return function (target: unknown, key: string, descriptor: PropertyDescriptor) {
            const creatorArgs = [descriptor.value, ...args] as Parameters<TFunc>;
            descriptor.value = func(...creatorArgs);
        };
    };
}