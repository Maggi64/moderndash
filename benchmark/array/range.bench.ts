import { range as lodashVersion } from "lodash-es";
import { range } from "moderndash";
import { range as radashVersion } from "radash";
import { bench, describe } from "vitest";

describe("range", () => {
    const start = 0;
    const end = 10000000;
    const step = 2;

    bench("ModernDash", () => {
        for (const num of range(start, end, step)) { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const a = num;
        }
    });

    bench("Radash", () => {
        for (const num of radashVersion(start, end, i => i, step)) { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const a = num;
        }
    });

    bench("Lodash", () => {
        for (const num of lodashVersion(start, end, step)) { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const a = num;
        }
    });
});