import React, { useContext } from 'react';

type PomodoroContextType =
  | {
      settings: { test: number; test2: number };
      setSettings: React.Dispatch<
        React.SetStateAction<{
          test: number;
          test2: number;
        }>
      >;
    }
  | undefined;

export const PomodoroContext = React.createContext<PomodoroContextType>(undefined);

export const usePomodoroContext = () => {
  const pomodoroContext = useContext(PomodoroContext);

  if (!pomodoroContext) {
    throw new Error('No PomodoroContext.Provider found when calling usePomodoroContext.');
  }

  return pomodoroContext;
};
