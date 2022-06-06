import { act, renderHook } from '@testing-library/react';
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
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBeGreaterThan(1);
  });
  it('check startTimer func - after pausing', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBeGreaterThan(2);
  });
  it('check startTimer func - after restarting', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      result.current.restartTimer();
    });
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBeGreaterThan(1);
  });
});
describe('useTimerInterval pauseTimer', () => {
  it('check pauseTimer func - after starting - Smaller than', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBeLessThan(2);
  });
  it('check pauseTimer func - after starting', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    let seconds = 0;
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    act(() => {
      seconds = result.current.seconds;
      result.current.pauseTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1500);
    });
    expect(result.current.seconds).toBe(seconds);
  });
});
describe('useTimerInterval restartTimer', () => {
  it('check restartTimer func - 2 sec after starting', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.restartTimer();
    });
    expect(result.current.seconds).toBe(0);
  });
  it('check restartTimer func - 2 sec after starting pause start again and restart', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.restartTimer();
    });
    expect(result.current.seconds).toBe(0);
  });
  it('check restartTimer func - 1 sec after starting restart pause start again and after 2 sec restart', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimerInterval(50));
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      result.current.pauseTimer();
    });
    act(() => {
      result.current.restartTimer();
    });
    act(() => {
      result.current.startTimer();
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    act(() => {
      result.current.restartTimer();
    });
    expect(result.current.seconds).toBe(0);
  });
});

// describe('useTimerInterval startTimer', () => {
//   it('check startTimer func - at the beginning', async () => {
//     const { result } = renderHook(() => useTimerInterval(50));
//     act(() => {
//       result.current.startTimer();
//     });
//     await waitFor(
//       () => {
//         expect(result.current.seconds).toBeGreaterThan(1);
//       },
//       { timeout: 2000 }
//     );
//   });
//   it('check startTimer func - after pausing', async () => {
//     const { result } = renderHook(() => useTimerInterval(50));
//     act(() => {
//       result.current.startTimer();
//     });
//     act(() => {
//       result.current.pauseTimer();
//     });
//     act(() => {
//       result.current.startTimer();
//     });
//     await waitFor(
//       () => {
//         expect(result.current.seconds).toBeGreaterThan(1);
//       },
//       { timeout: 2000 }
//     );
//   });
// });
