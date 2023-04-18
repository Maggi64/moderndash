import { randomString } from "moderndash";

type RandomObject = Record<string, object | number | string | boolean>;

const fastRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export function randomObject(fieldCount: number, allowNested = true): RandomObject {
    const generatedObj = {} as RandomObject;

    for (let i = 0; i < fieldCount; i++) {
        let generatedObjField: object | number | string | boolean = "";

        switch (fastRandomInt(0, allowNested ? 5 : 4)) {
            case 0:
                generatedObjField = fastRandomInt(0, 1000);
                break;

            case 1:
                generatedObjField = Math.random();
                break;

            case 2:
                generatedObjField = Math.random() < 0.5;
                break;

            case 3:
                generatedObjField = randomString(fastRandomInt(0, 3) + 4);
                break;

            case 4:
                generatedObjField = randomObject(fieldCount, allowNested);
                break;
        }

        generatedObj[randomString(8)] = generatedObjField;
    }

    return generatedObj;
}

export function randomObjectArray(n: number) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(randomObject(6));
    }

    return arr;
}

export function randomStringArray(n: number, charSet?: string) {
    const arr = [] as string[];

    for (let i = 0; i < n; i++) {
        arr.push(randomString(fastRandomInt(0, 4) + 4, charSet));
    }

    return arr;
}

export function randomNumberArray(n: number, min = 0, max = 1000) {
    const arr = [] as number[];

    for (let i = 0; i < n; i++) {
        arr.push(fastRandomInt(min, max));
    }

    return arr;
}