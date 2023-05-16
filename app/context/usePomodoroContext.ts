import { useContext } from 'react';

import { PomodoroContext } from './PomodoroContext';

const usePomodoroContext = () => {
  const pomodoroContext = useContext(PomodoroContext);

  if (!pomodoroContext) {
    throw new Error('No PomodoroContext.Provider found when calling usePomodoroContext.');
  }

  return pomodoroContext;
};

export default usePomodoroContext;
