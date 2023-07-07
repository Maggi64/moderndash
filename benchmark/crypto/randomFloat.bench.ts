import { random } from "lodash-es";
import { randomFloat } from "moderndash";
import { bench, describe } from "vitest";

describe("randomFloat", () => {
    bench("moderndash", () => {
        randomFloat(0, 1);
    });

    // uses Math.random and is not cryptographically secure but is faster
    bench("lodash", () => {
        random(0, 1, true);
    });
});