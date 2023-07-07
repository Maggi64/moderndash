import { random } from "lodash-es";
import { randomInt } from "moderndash";
import { bench, describe } from "vitest";

describe("randomInt", () => {
    bench("moderndash", () => {
        for (let i = 1; i < 1000; i++) {
            randomInt(0, i);
        }
    });

    // uses Math.random and is not cryptographically secure but is faster
    bench("lodash", () => {
        for (let i = 1; i < 1000; i++) {
            random(0, i);
        }
    });
});