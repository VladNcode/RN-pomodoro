import FontAwesome from '@expo/vector-icons/FontAwesome';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { Text, Vibration, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { Colors } from '../../constants';
import usePomodoroContext from '../../context/usePomodoroContext';
import { convertSecondsToMinutesAndSeconds, getRandomString } from '../../utils/utils';
import { styles } from './styles';

export const Main = () => {
  const {
    timerState,
    setTimerState,
    autoplay,
    workCounter,
    setWorkCounter,
    breakCounter,
    setBreakCounter,
    workDuration,
    breakDuration,
    resetTimer,
    setResetTimer,
    sound,
    vibration,
    playSound,
    isPlaying,
    setIsPlaying,
  } = usePomodoroContext();

  const onTimerComplete = () => {
    if (sound) playSound();
    if (vibration) Vibration.vibrate(1000);
    setIsPlaying(autoplay);
    setTimerState(timerState === 'work' ? 'break' : 'work');
    setResetTimer(getRandomString());

    if (timerState === 'work') {
      setWorkCounter(c => c + 1);
    } else {
      setBreakCounter(c => c + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sessions}>{`Sessions completed: ${Math.floor((workCounter + breakCounter) / 2)}`}</Text>

      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          size={250}
          key={resetTimer}
          duration={timerState === 'work' ? workDuration : breakDuration}
          isGrowing
          rotation="counterclockwise"
          onComplete={onTimerComplete}
          strokeLinecap="butt"
          trailColor={timerState === 'work' ? 'rgba(163, 0, 0, 0.35)' : 'rgba(34, 184, 69, 0.35)'}
          colors={timerState === 'work' ? Colors.red : Colors.green}>
          {({ remainingTime }) => (
            <Text style={styles.timerText}>{convertSecondsToMinutesAndSeconds(remainingTime)}</Text>
          )}
        </CountdownCircleTimer>
      </View>

      <RNBounceable hitSlop={16} onPress={() => setIsPlaying(c => !c)} style={styles.stopStartButton}>
        {isPlaying ? (
          <FontAwesome name="pause" size={45} color="white" />
        ) : (
          <FontAwesome name="play" size={45} color="white" />
        )}
      </RNBounceable>
    </View>
  );
};
