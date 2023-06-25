import { describe, it, expect, vi } from "vitest";
import debounce from ".";

describe("防抖", () => {
  it("Multiple calls are triggered only once.", () => {
    vi.useFakeTimers();
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 200);

    debouncedFn();
    expect(mockFn).not.toBeCalled();
    vi.advanceTimersByTime(199);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    vi.advanceTimersByTime(200);
    expect(mockFn).toBeCalledTimes(1);
  });

  it("Should call immediately.", () => {
    vi.useFakeTimers();
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 200, true);

    debouncedFn();
    expect(mockFn).toBeCalled();

    debouncedFn();
    expect(mockFn).toBeCalledTimes(1);

    vi.advanceTimersByTime(199);

    debouncedFn();
    expect(mockFn).toBeCalledTimes(1);


    vi.advanceTimersByTime(200);

    debouncedFn();
    expect(mockFn).toBeCalledTimes(2);
  });
});
