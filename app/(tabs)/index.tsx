import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { useState } from 'react';
import { BREAK_TIME_IN_SECONDS, WORK_TIME_IN_SECONDS } from '../constants/settings';
import usePomodoroContext from '../context/usePomodoroContext';
import { convertSecondsToMinutes, convertSecondsToMinutesAndSeconds } from '../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  marginBottom: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 20,
  },
});

export default function TabOneScreen() {
  const {
    settings,
    timerState,
    setTimerState,
    autoplay,
    setAutoplay,
    workCounter,
    setWorkCounter,
    breakCounter,
    setBreakCounter,
    workDuration,
    breakDuration,
  } = usePomodoroContext();
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(settings.test);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom]}>Pomodoro</Text>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        size={200}
        key={timerState}
        duration={timerState === 'work' ? WORK_TIME_IN_SECONDS : BREAK_TIME_IN_SECONDS / 20}
        isGrowing
        rotation="counterclockwise"
        onComplete={() => {
          setIsPlaying(autoplay);
          setTimerState(timerState === 'work' ? 'break' : 'work');

          if (timerState === 'work') {
            setWorkCounter(c => c + 1);
          } else {
            setBreakCounter(c => c + 1);
          }
        }}
        strokeLinecap="butt"
        trailColor={timerState === 'work' ? 'rgba(163, 0, 0, 0.21)' : 'rgba(34, 184, 69, 0.18)'}
        colors={timerState === 'work' ? '#A30000' : '#22b845'}>
        {({ remainingTime }) => <Text style={styles.title}>{convertSecondsToMinutesAndSeconds(remainingTime)}</Text>}
      </CountdownCircleTimer>
      <Pressable style={styles.marginTop} onPress={() => setIsPlaying(c => !c)}>
        <Text style={styles.title}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </Pressable>
      <Pressable onPress={() => setAutoplay(c => !c)}>
        <Text style={[styles.title, styles.marginBottom]}>Toggle autoplay</Text>
      </Pressable>
      <Text style={styles.title}>{`Autoplay: ${autoplay}`}</Text>
      <Text style={styles.title}>{`Work counter: ${workCounter}`}</Text>
      <Text style={styles.title}>{`Break counter: ${breakCounter}`}</Text>
      <Text style={styles.title}>{`Work duration: ${convertSecondsToMinutes(workDuration)}`}</Text>
      <Text style={styles.title}>{`Break duration: ${convertSecondsToMinutes(breakDuration)}`}</Text>
      <View style={styles.separator} />
    </View>
  );
}
