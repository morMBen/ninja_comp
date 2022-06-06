import { act, renderHook } from '@testing-library/react';
import { useStopWatchTimer } from './stopWatchTimer.hook';

describe('useTimerInterval', () => {
  it('checking default state', () => {
    const { result } = renderHook(() => useStopWatchTimer(3, 50));
    expect(result.current.seconds).toBe(0);
    expect(result.current.points).toBe([]);
    expect(result.current.btnStatus).toBe({
      startPauseBtn: 'start',
      splitResetBtn: 'off',
    });
    expect(result.current.splitReset).toBeInstanceOf(Function);
    expect(result.current.startPause).toBeInstanceOf(Function);
  });
});
