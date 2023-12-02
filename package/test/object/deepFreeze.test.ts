import { deepFreeze } from "@object/deepFreeze.js";

test("deep freeze object", () => {
    const obj = { a: { b: 1 } };

    const frozen = deepFreeze(obj);

    expect(frozen).toEqual({ a: { b: 1 } });
    expect(() => {
        frozen.a.b = 2;
    }).toThrowError(TypeError);
});