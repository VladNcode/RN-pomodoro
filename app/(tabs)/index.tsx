import RNBounceable from '@freakycoder/react-native-bounceable';
import { useState } from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import usePomodoroContext from '../context/usePomodoroContext';
import { convertSecondsToMinutesAndSeconds } from '../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sessions: {
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  timerText: {
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },

  stopStartButton: {
    marginTop: 16,
    height: 50,
    width: '60%',
    backgroundColor: '#7cf6ff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopStartButtonText: {
    fontFamily: 'SpaceMono',
    color: '#000000',
  },
  countdownContainer: {
    marginVertical: 60,
  },
});

export default function TabOneScreen() {
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
  } = usePomodoroContext();

  const [isPlaying, setIsPlaying] = useState(false);

  const onTimerComplete = () => {
    Vibration.vibrate(1000);
    setIsPlaying(autoplay);
    setTimerState(timerState === 'work' ? 'break' : 'work');

    if (timerState === 'work') {
      setWorkCounter(c => c + 1);
    } else {
      setBreakCounter(c => c + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sessions}>{`Sessions: ${Math.floor((workCounter + breakCounter) / 2)}`}</Text>

      <View style={styles.countdownContainer}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          size={250}
          key={timerState}
          duration={timerState === 'work' ? workDuration / 100 : breakDuration / 20}
          isGrowing
          rotation="counterclockwise"
          onComplete={onTimerComplete}
          strokeLinecap="butt"
          trailColor={timerState === 'work' ? 'rgba(163, 0, 0, 0.35)' : 'rgba(34, 184, 69, 0.35)'}
          colors={timerState === 'work' ? '#f04040' : '#40f07b'}>
          {({ remainingTime }) => (
            <Text style={styles.timerText}>{convertSecondsToMinutesAndSeconds(remainingTime)}</Text>
          )}
        </CountdownCircleTimer>
      </View>

      <RNBounceable onPress={() => setIsPlaying(c => !c)} style={styles.stopStartButton}>
        <Text style={styles.stopStartButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </RNBounceable>
    </View>
  );
}
