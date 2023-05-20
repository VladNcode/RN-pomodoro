import { Audio } from 'expo-av';

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

export const playSound = async (
  selectedMp3: string,
  setStatePSound: React.Dispatch<React.SetStateAction<Audio.Sound | undefined>>,
) => {
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
      { sound: alarm12 },
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
      Audio.Sound.createAsync(require('../../assets/sounds/alarm12.mp3')),
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
      alarm12,
    };

    const sound = map[selectedMp3 as keyof typeof map];

    setStatePSound(sound);

    await sound.playAsync();
  } catch (error) {
    console.log(error);
  }
};
