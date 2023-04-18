import type { Mock } from "vitest";

import { Queue } from "@promise/queue.js";
import { sleep } from "@promise/sleep.js";

let queue: Queue;

const createAsync = (mockFn: Mock<[], string>) => async () => {
    await sleep(20);
    return mockFn();
};

const callbackMock = vi.fn(() => "resolved1");
const callbackMock2 = vi.fn(() => "resolved2");
const callbackMock3 = vi.fn(() => "resolved3");

beforeEach(() => {
    queue = new Queue(2);
    callbackMock.mockClear();
    callbackMock2.mockClear();
    callbackMock3.mockClear();
});

test("add a promise to the queue", async () => {
    const result = await queue.add(createAsync(callbackMock));
    expect(callbackMock).toHaveBeenCalledOnce();
    expect(result).toBe("resolved1");
});

test("add an array of async to the queue", async () => {
    const results = queue.add([createAsync(callbackMock), createAsync(callbackMock2)]);
        
    await sleep(10);
    expect(callbackMock).not.toHaveBeenCalledOnce();
    expect(callbackMock2).not.toHaveBeenCalledOnce();
        
    await sleep(10);
    expect(callbackMock).toHaveBeenCalledOnce();
    expect(callbackMock2).toHaveBeenCalledOnce();
    expect(await results).toEqual(["resolved1", "resolved2"]);
});
test("pause the execution of the promises in the queue", async () => { 
    queue.pause();
    void queue.add(createAsync(callbackMock));
    await sleep(20);
    expect(queue.isPaused()).toBe(true);
    expect(callbackMock).not.toHaveBeenCalled();
    queue.resume();
    await sleep(20);
    expect(callbackMock).toHaveBeenCalled();
});
test("clear the queue", async () => {
    queue.pause();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    queue.add([createAsync(callbackMock), createAsync(callbackMock2)]).catch(() => {});
    queue.clear();
    
    await sleep(20);
    expect(callbackMock).not.toHaveBeenCalled();
    expect(callbackMock2).not.toHaveBeenCalled();
});

test("return the number of promises in the queue", () => {
    queue.pause();
    expect(queue.getQueue().length).toBe(0);
    void queue.add(createAsync(callbackMock));
    expect(queue.getQueue().length).toBe(1);
    void queue.add(createAsync(callbackMock2));
    expect(queue.getQueue().length).toBe(2);
});

test("do not run more then the specified number of tasks", async () => {
    void queue.add(createAsync(callbackMock));
    void queue.add(createAsync(callbackMock2));
    void queue.add(createAsync(callbackMock3));
    expect(queue.getQueue().length).toBe(1);
    await sleep(20);

    expect(callbackMock).toHaveBeenCalledOnce();
    expect(callbackMock2).toHaveBeenCalledOnce();
    expect(callbackMock3).not.toHaveBeenCalled();

    await sleep(20);
    expect(callbackMock3).toHaveBeenCalledOnce();
});

test("handle rejected promises", async () => {
    const callbackMock4 = vi.fn(() => Promise.reject("rejected"));
    await expect(queue.add(callbackMock4)).rejects.toBe("rejected");
    expect(callbackMock4).toHaveBeenCalledOnce();
});