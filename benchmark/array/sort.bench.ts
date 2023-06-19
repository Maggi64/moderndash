import { sortBy as lodashVersion } from "lodash-es";
import { randomInt, sort } from "moderndash";
import { sort as radashVersion } from "radash";
import { bench, describe } from "vitest";

describe("sort", () => {
    const randomArr = Array.from({ length: 100000 }, () => ({ a: randomInt(1, 1000) }));
      
    bench("moderndash", () => {
        sort([...randomArr], { by: item => item.a, order: "asc" });
    });

    bench("radash", () => {
        radashVersion([...randomArr], item => item.a);
    });

    bench("lodash", () => {
        lodashVersion([...randomArr], item => item.a);
    });
});