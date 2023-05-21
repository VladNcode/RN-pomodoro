import { Audio } from 'expo-av';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

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
      stateSound: Audio.Sound | undefined;
      setStateSound: React.Dispatch<React.SetStateAction<Audio.Sound | undefined>>;
      playSound: () => Promise<void>;
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

  const [stateSound, setStateSound] = useState<Audio.Sound | undefined>();

  const playSound = useCallback(async () => {
    try {
      const [
        { sound: alarm1 },
        { sound: alarm2 },
        { sound: alarm3 },
        { sound: alarm4 },
        { sound: alarm5 },
        { sound: alarm6 },
        { sound: alarm7 },
        { sound: alarm8 },
        { sound: alarm9 },
        { sound: alarm10 },
        { sound: alarm11 },
      ] = await Promise.all([
        Audio.Sound.createAsync(require('../../assets/sounds/alarm1.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm2.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm3.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm4.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm5.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm6.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm7.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm8.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm9.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm10.mp3')),
        Audio.Sound.createAsync(require('../../assets/sounds/alarm11.mp3')),
      ]);

      const map = {
        alarm1,
        alarm2,
        alarm3,
        alarm4,
        alarm5,
        alarm6,
        alarm7,
        alarm8,
        alarm9,
        alarm10,
        alarm11,
      };

      const soundToPlay = map[selectedMp3 as keyof typeof map];

      setStateSound(soundToPlay);

      await soundToPlay.playAsync();
    } catch (error) {
      console.log(error);
    }
  }, [selectedMp3]);

  useEffect(() => {
    console.log('unloading');

    return stateSound
      ? () => {
          stateSound.unloadAsync();
        }
      : undefined;
  }, [stateSound]);

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
      stateSound,
      setStateSound,
      playSound,
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
      stateSound,
      playSound,
    ],
  );

  return <PomodoroContext.Provider value={values}>{children}</PomodoroContext.Provider>;
};
