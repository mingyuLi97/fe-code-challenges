import { describe, it, expect, vi } from "vitest";
import EventEmitter from ".";

describe("publish-subscribe", () => {
  it("发布订阅", () => {
    const emitter = new EventEmitter();
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    const fn3 = vi.fn();
    emitter.on("event1", fn1);
    emitter.on("event1", fn2);
    emitter.once("event2", fn3);

    emitter.emit("event1", 1, 2);
    emitter.emit("event1", 5, 6);
    emitter.off("event1", fn1);
    emitter.emit("event1", 7, 8);

    emitter.emit("event2", 3, 4);
    emitter.emit("event2", 5, 6);

    expect(fn1).toHaveBeenNthCalledWith(1, 1, 2);
    expect(fn1).toHaveBeenNthCalledWith(2, 5, 6);
    expect(fn1).toHaveBeenCalledTimes(2);

    expect(fn2).toHaveBeenNthCalledWith(1, 1, 2);
    expect(fn2).toHaveBeenNthCalledWith(2, 5, 6);
    expect(fn2).toHaveBeenNthCalledWith(3, 7, 8);
    expect(fn2).toHaveBeenCalledTimes(3);

    expect(fn3).toHaveBeenCalled(3, 4);
    expect(fn3).toHaveBeenCalledOnce();
  });
});
