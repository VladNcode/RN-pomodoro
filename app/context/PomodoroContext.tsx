import React, { useMemo, useState } from 'react';

import { TimerState } from '../types/globalTypes';
import { BREAK_TIME_IN_SECONDS, WORK_TIME_IN_SECONDS } from '../constants/settings';

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
      settings: { test: number; test2: number };
      setSettings: React.Dispatch<React.SetStateAction<{ test: number; test2: number }>>;
      workDuration: number;
      setWorkDuration: React.Dispatch<React.SetStateAction<number>>;
      breakDuration: number;
      setBreakDuration: React.Dispatch<React.SetStateAction<number>>;
    };

export const PomodoroContext = React.createContext<PomodoroContextType>(undefined);

export const PomorodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState({ test: 123, test2: 456 });
  const [timerState, setTimerState] = useState<TimerState>('break');
  const [autoplay, setAutoplay] = useState(false);
  const [workCounter, setWorkCounter] = useState(0);
  const [breakCounter, setBreakCounter] = useState(0);
  const [workDuration, setWorkDuration] = useState(WORK_TIME_IN_SECONDS);
  const [breakDuration, setBreakDuration] = useState(BREAK_TIME_IN_SECONDS);

  const values = useMemo(
    () => ({
      settings,
      setSettings,
      timerState,
      setTimerState,
      autoplay,
      setAutoplay,
      workCounter,
      setWorkCounter,
      breakCounter,
      setBreakCounter,
      workDuration,
      setWorkDuration,
      breakDuration,
      setBreakDuration,
    }),
    [settings, timerState, autoplay, workCounter, breakCounter, workDuration, breakDuration],
  );

  return <PomodoroContext.Provider value={values}>{children}</PomodoroContext.Provider>;
};
