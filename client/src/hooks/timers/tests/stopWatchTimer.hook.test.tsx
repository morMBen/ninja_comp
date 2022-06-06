import { act, renderHook } from '@testing-library/react';
import { useStopWatchTimer } from '../stopWatchTimer.hook';

describe('useTimerInterval - state', () => {
  it('checking default state', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    expect(result.current.seconds).toBe(0);
    expect(result.current.points).toEqual([]);
    expect(result.current.btnStatus).toEqual({
      startPauseBtn: 'start',
      splitResetBtn: 'off',
    });
    expect(result.current.splitReset).toBeInstanceOf(Function);
    expect(result.current.startPause).toBeInstanceOf(Function);
  });
});
describe('useTimerInterval - startPause func', () => {
  it('check startPause - after first press', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    jest.useFakeTimers();
    act(() => {
      result.current.startPause(() => {});
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBeGreaterThan(1);
    expect(result.current.points).toEqual([]);
    expect(result.current.btnStatus).toEqual({
      splitResetBtn: 'split',
      startPauseBtn: 'pause',
    });
  });
  it('check startPause - after pressing twice fast', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    jest.useFakeTimers();
    act(() => {
      result.current.startPause(() => {});
    });
    act(() => {
      result.current.startPause(() => {});
    });
    expect(result.current.seconds).toBe(0);
    expect(result.current.points).toEqual([]);
    expect(result.current.btnStatus).toEqual({
      startPauseBtn: 'start',
      splitResetBtn: 'reset',
    });
  });
  it('check startPause - after pressing twice with two sec delay', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    jest.useFakeTimers();
    act(() => {
      result.current.startPause(() => {});
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.startPause(() => {});
    });
    expect(result.current.seconds).toBeGreaterThan(1);
    expect(result.current.points).toEqual([]);
    expect(result.current.btnStatus).toEqual({
      startPauseBtn: 'start',
      splitResetBtn: 'reset',
    });
  });
  it('check startPause callback - after pass all points', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    let testArg = 'null';
    jest.useFakeTimers();
    act(() => {
      result.current.startPause(() => {});
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.splitReset(() => true);
    });
    act(() => {
      result.current.splitReset(() => true);
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.splitReset(() => true);
    });
    act(() => {
      result.current.startPause(() => {
        testArg = 'The result from the callback';
      });
    });
    expect(result.current.seconds).toBeGreaterThan(1);
    expect(testArg).toBe('The result from the callback');
    expect(result.current.points.length).toBe(3);
    expect(result.current.btnStatus).toEqual({
      splitResetBtn: 'reset',
      startPauseBtn: 'end',
    });
  });
});
