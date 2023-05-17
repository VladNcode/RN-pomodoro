import React, { useMemo, useState } from 'react';

import { BREAK_TIME_IN_SECONDS, WORK_TIME_IN_SECONDS } from '../constants/settings';
import { TimerState } from '../types/globalTypes';

type PomodoroContextType =
  | undefined
  | {
      workCounter: number;
      breakCounter: number;
      setWorkCounter: React.Dispatch<React.SetStateAction<number>>;
      setBreakCounter: React.Dispatch<React.SetStateAction<number>>;
      timerState: TimerState;
      setTimerState: React.Dispatch<React.SetStateAction<TimerState>>;
      autoplay: boolean;
      setAutoplay: React.Dispatch<React.SetStateAction<boolean>>;
      vibration: boolean;
      setVibration: React.Dispatch<React.SetStateAction<boolean>>;
      workDuration: number;
      setWorkDuration: React.Dispatch<React.SetStateAction<number>>;
      breakDuration: number;
      setBreakDuration: React.Dispatch<React.SetStateAction<number>>;
    };

export const PomodoroContext = React.createContext<PomodoroContextType>(undefined);

export const PomorodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [timerState, setTimerState] = useState<TimerState>('work');
  const [autoplay, setAutoplay] = useState(false);
  const [vibration, setVibration] = useState(false);
  const [workCounter, setWorkCounter] = useState(0);
  const [breakCounter, setBreakCounter] = useState(0);
  const [workDuration, setWorkDuration] = useState(WORK_TIME_IN_SECONDS);
  const [breakDuration, setBreakDuration] = useState(BREAK_TIME_IN_SECONDS);

  const values = useMemo(
    () => ({
      timerState,
      setTimerState,
      autoplay,
      setAutoplay,
      vibration,
      setVibration,
      workCounter,
      setWorkCounter,
      breakCounter,
      setBreakCounter,
      workDuration,
      setWorkDuration,
      breakDuration,
      setBreakDuration,
    }),
    [timerState, autoplay, vibration, workCounter, breakCounter, workDuration, breakDuration],
  );

  return <PomodoroContext.Provider value={values}>{children}</PomodoroContext.Provider>;
};
