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
      resetTimer: string;
      setResetTimer: React.Dispatch<React.SetStateAction<string>>;
      sound: boolean;
      setSound: React.Dispatch<React.SetStateAction<boolean>>;
      selectedMp3: string;
      setSelectedMp3: React.Dispatch<React.SetStateAction<string>>;
    };

export const PomodoroContext = React.createContext<PomodoroContextType>(undefined);

export const PomorodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [timerState, setTimerState] = useState<TimerState>('work');
  const [autoplay, setAutoplay] = useState(false);
  const [vibration, setVibration] = useState(false);
  const [sound, setSound] = useState(false);
  const [selectedMp3, setSelectedMp3] = useState('alarm1');
  const [workCounter, setWorkCounter] = useState(0);
  const [breakCounter, setBreakCounter] = useState(0);
  const [workDuration, setWorkDuration] = useState(WORK_TIME_IN_SECONDS);
  const [breakDuration, setBreakDuration] = useState(BREAK_TIME_IN_SECONDS);
  const [resetTimer, setResetTimer] = useState('');

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
      resetTimer,
      setResetTimer,
      sound,
      setSound,
      selectedMp3,
      setSelectedMp3,
    }),
    [
      timerState,
      autoplay,
      vibration,
      workCounter,
      breakCounter,
      workDuration,
      breakDuration,
      resetTimer,
      sound,
      selectedMp3,
    ],
  );

  return <PomodoroContext.Provider value={values}>{children}</PomodoroContext.Provider>;
};
