import { describe, it, expect, vi } from "vitest";
import throttle from ".";

vi.useFakeTimers();

describe("throttle", () => {
  it("The function should be triggered correctly within the specified time interval.", () => {
    const mockFunction = vi.fn();
    const throttledFunction = throttle(mockFunction, 200);

    throttledFunction(1);
    expect(mockFunction).toBeCalledTimes(1);

    vi.advanceTimersByTime(100);
    throttledFunction(2);
    expect(mockFunction).toBeCalledTimes(1);

    vi.advanceTimersByTime(100);
    throttledFunction(3);
    expect(mockFunction).toBeCalledTimes(2);
    expect(mockFunction).toHaveBeenLastCalledWith(3);

    vi.advanceTimersByTime(200);
    throttledFunction(4);
    expect(mockFunction).toBeCalledTimes(3);
    expect(mockFunction).toHaveBeenLastCalledWith(4);
  });

  it("Last call will be executed.", () => {
    const mockFunction = vi.fn();
    const throttledFunction = throttle(mockFunction, 200);

    throttledFunction(1);
    expect(mockFunction).toBeCalledTimes(1);

    vi.advanceTimersByTime(100);
    throttledFunction(2);
    expect(mockFunction).toBeCalledTimes(1);
    vi.advanceTimersByTime(100);
    expect(mockFunction).toBeCalledTimes(1);
    
    vi.advanceTimersByTime(100);
    expect(mockFunction).toBeCalledTimes(2);
    expect(mockFunction).toHaveBeenLastCalledWith(2);
  });
});
