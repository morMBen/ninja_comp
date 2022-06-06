import { act, renderHook, waitFor } from '@testing-library/react';
import { useTimerInterval } from './timerInterval.hook';

describe('useTimerInterval', () => {
  it('checking default state', () => {
    const { result } = renderHook(() => useTimerInterval(50));
    expect(result.current.seconds).toBe(0);
    expect(result.current.startTimer).toBeInstanceOf(Function);
    expect(result.current.restartTimer).toBeInstanceOf(Function);
    expect(result.current.pauseTimer).toBeInstanceOf(Function);
  });
});
describe('useTimerInterval startTimer', () => {
  it('check startTimer func - at the beginning', async () => {
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    await waitFor(
      () => {
        expect(result.current.seconds).toBeGreaterThan(1);
      },
      { timeout: 2000 }
    );
  });
  it('check startTimer func - after pausing', async () => {
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      result.current.startTimer();
    });
    await waitFor(
      () => {
        expect(result.current.seconds).toBeGreaterThan(1);
      },
      { timeout: 2000 }
    );
  });
});

describe('useTimerInterval pauseTimer', () => {
  it('check pauseTimer func - after starting', async () => {
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      result.current.pauseTimer();
    });
    await waitFor(
      () => {
        expect(result.current.seconds).toBe(0);
      },
      { timeout: 2000 }
    );
  });
});
