export const convertSecondsToMinutesAndSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  const formattedminutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedminutes}:${formattedSeconds}`;
};

export const convertSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);

  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
};

export const getRandomString = () => `${new Date().getTime()}${Math.random()}`;
