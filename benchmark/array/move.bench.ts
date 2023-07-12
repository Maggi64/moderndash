import { move, randomInt } from "moderndash";
import { move as rambdaVersion } from "rambda";
import { bench, describe } from "vitest";


describe ("move", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);

    bench("moderndash", () => {
        for (let i = 0; i < arr.length / 3; i++) {
            move(arr, i, randomInt(0, arr.length - 1));
        }
    });

    bench("rambda", () => {
        for (let i = 0; i < arr.length / 3; i++) {
            rambdaVersion(i, randomInt(0, arr.length - 1), arr);
        }
    });
});