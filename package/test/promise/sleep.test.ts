import { sleep } from "@promise/sleep.js";

test("resolve after the specified time", async () => {
    const startTime = Date.now();
    await sleep(100);
    // 99 because setTimeout is not 100% accurate
    expect(Date.now() - startTime).toBeGreaterThanOrEqual(99);
});