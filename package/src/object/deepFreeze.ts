import type { PlainObject } from "@type/PlainObject.js";

import { isPlainObject } from "@validate/isPlainObject.js";

export function deepFreeze<TObj extends PlainObject>(obj: TObj): DeepReadonly<TObj> {
    if (!isPlainObject(obj) || Object.isFrozen(obj)) {
        return obj as DeepReadonly<TObj>;
    }

    for (const key of Object.keys(obj)) {
        deepFreeze(obj[key] as PlainObject);
    }

    return Object.freeze(obj) as DeepReadonly<TObj>;
}


type DeepReadonly<T> = 
  T extends (...args: infer Args) => infer Return ? (...args: Args) => Return :
      T extends (infer R)[] ? readonly DeepReadonly<R>[] :
          T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } :
              T;