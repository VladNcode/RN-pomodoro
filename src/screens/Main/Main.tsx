import FontAwesome from '@expo/vector-icons/FontAwesome';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import usePomodoroContext from '../../context/usePomodoroContext';
import { convertSecondsToMinutesAndSeconds, getRandomString } from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sessions: {
    fontFamily: Fonts.Poppins,
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },

  timerText: {
    fontFamily: Fonts.SpaceMono,
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },

  stopStartButton: {
    marginTop: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdownContainer: {
    marginVertical: 60,
  },
});

export default function Main() {
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
}
