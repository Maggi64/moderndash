/* eslint-disable @typescript-eslint/no-unused-expressions */
import { range as lodashVersion } from "lodash-es";
import { range } from "moderndash";
import { range as radashVersion } from "radash";
import { bench, describe } from "vitest";

describe("range", () => {
    const start = 0;
    const end = 1000000;
    const step = 2;

    bench("moderndash", () => {
        for (let i = 0; i < 10; i++) {
            // Generate full array
            range(start + i, end + i, step + i);

            // iterate over range and break early
            for (const num of range(start - i, end - i, step + i)) {
                if (num > end / 3)
                    break;
            }
        }
    });
    
    bench("lodash", () => {
        for (let i = 0; i < 10; i++) {
            lodashVersion(start + i, end + i, step + i);
            for (const num of lodashVersion(start - i, end - i, step + i)) {
                if (num > end / 3)
                    break;
            }
        }
    });
   
    bench("radash", () => {
        for (let i = 0; i < 10; i++) {
            [...radashVersion(start + i, end + i, v => v, step + i)];
            for (const num of range(start - i, end - i, step + i)) {
                if (num > end / 3)
                    break;
            }
        }
    });
});