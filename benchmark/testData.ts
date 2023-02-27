import type { PlainObject } from 'moderndash';

import { randomInt, randomString } from 'moderndash';

export function randomObject(fieldCount: number, allowNested = true): PlainObject {
    const generatedObj = {} as Record<string, unknown>;

    for (let i = 0; i < fieldCount; i++) {
        let generatedObjField: object | number | string | boolean = '';

        switch (randomInt(0, allowNested ? 5 : 4)) {
            case 0:
                generatedObjField = randomInt(0, 1000);
                break;

            case 1:
                generatedObjField = Math.random();
                break;

            case 2:
                generatedObjField = Math.random() < 0.5;
                break;

            case 3:
                generatedObjField = randomString(randomInt(0, 4) + 4);
                break;

            case 5:
                generatedObjField = randomObject(fieldCount, allowNested);
                break;
        }

        generatedObj[randomString(8)] = generatedObjField;
    }

    return generatedObj;
}

export function randomObjectArray(n: number) {
    const arr = [] as PlainObject[];

    for (let i = 0; i < n; i++) {
        arr.push(randomObject(6));
    }

    return arr;
}

export function randomStringArray(n: number) {
    const arr = [] as string[];

    for (let i = 0; i < n; i++) {
        arr.push(randomString(randomInt(0, 4) + 4));
    }

    return arr;
}

export function randomNumberArray(n: number) {
    const arr = [] as number[];

    for (let i = 0; i < n; i++) {
        arr.push(randomInt(0, 1000));
    }

    return arr;
}