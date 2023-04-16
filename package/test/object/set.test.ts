import { set } from "@object/set.js";

test("set a value", () => {
    const obj = { a: { b: 2 } };
    set(obj, "a.c", 1);
    expect(obj).toEqual({ a: { b: 2, c: 1 } });
});

test("set a value with array path", () => {
    const obj = { a: { b: 2, c: [1, 2] } };
    set(obj, "a.c[2]", 1);
    expect(obj).toEqual({ a: { b: 2, c: [1, 2, 1] } });

    set(obj, "a.d[0].c", 3);
    expect(obj).toEqual({ a: { b: 2, c: [1, 2, 1], d: [{ c: 3 }] } });

    set(obj, "a[0].c", 3);
    expect(obj).toEqual({ a: [{ c: 3 }] });
});

test("recognise number key", () => {
    const obj = { a: 1 };
    set(obj, "a.e0[0]", 1);
    expect(obj).toEqual({ a: { e0: [1] } });
});

test("throw error on incorrect path format", () => {
    const obj = { a: { b: 2 } };
    expect(() => set(obj, "a.c[1", 1)).toThrow();
    expect(() => set(obj, "a.c.", 1)).toThrow();
});

test("allow _ and $ in path", () => {
    const obj = { a: { b: 2 } };
    expect(() => set(obj, "a.c_1", 1)).not.toThrow();
    expect(() => set(obj, "a.c-$1", 1)).not.toThrow();
});