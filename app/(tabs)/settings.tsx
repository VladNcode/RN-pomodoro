import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import InputSpinner from 'react-native-input-spinner';

import usePomodoroContext from '../context/usePomodoroContext';
import { convertSecondsToMinutes } from '../utils/utils';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.03,
    paddingHorizontal: width * 0.05,
    flex: 1,
  },

  timeInputContainer: {
    alignItems: 'center',
  },
  timeInputLabel: {
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeInput: {
    marginTop: 12,
    width: width * 0.6,
  },
  timeInputNumbers: {
    color: '#FFFFFF',
  },

  mediumMarginTop: {
    marginTop: 20,
  },

  checkboxContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  checkbox: {
    marginLeft: width * 0.21,
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  checkboxText: {
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    textDecorationLine: 'none',
  },
  checkboxInnerIconStyle: {
    borderWidth: 4,
  },
  redBorder: {
    borderColor: '#f04040',
  },
  greenBorder: {
    borderColor: '#40f07b',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
  },
  info: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default function TabTwoScreen() {
  const {
    autoplay,
    setAutoplay,
    vibration,
    setVibration,
    breakDuration,
    workDuration,
    setWorkDuration,
    setBreakDuration,
    workCounter,
    breakCounter,
  } = usePomodoroContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timeInputContainer}>
        <Text style={styles.timeInputLabel}>Work duration</Text>
        <InputSpinner
          showBorder
          rounded={false}
          fontSize={30}
          style={styles.timeInput}
          max={120}
          min={1}
          step={1}
          inputProps={styles.timeInputNumbers}
          colorMax="#fff200"
          color="#f04040"
          colorMin="#40c5f4"
          value={workDuration / 60}
          onChange={num => {
            if (typeof num === 'number') setWorkDuration(num * 60);
          }}
        />
      </View>

      <View style={[styles.timeInputContainer, styles.mediumMarginTop]}>
        <Text style={styles.timeInputLabel}>Break duration</Text>
        <InputSpinner
          showBorder
          rounded={false}
          fontSize={30}
          style={styles.timeInput}
          max={120}
          min={1}
          step={1}
          inputProps={styles.timeInputNumbers}
          colorMax="#fff200"
          color="#40f07b"
          colorMin="#40c5f4"
          value={breakDuration / 60}
          onChange={num => {
            if (typeof num === 'number') setBreakDuration(num * 60);
          }}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          style={styles.checkbox}
          size={30}
          fillColor="#40f07b"
          text="Toggle autoplay"
          innerIconStyle={[styles.checkboxInnerIconStyle, autoplay ? styles.greenBorder : styles.redBorder]}
          textStyle={styles.checkboxText}
          onPress={(isChecked: boolean) => {
            setAutoplay(isChecked);
          }}
        />

        <BouncyCheckbox
          style={styles.checkbox}
          size={30}
          fillColor="#40f07b"
          text="Toggle vibration"
          innerIconStyle={[styles.checkboxInnerIconStyle, vibration ? styles.greenBorder : styles.redBorder]}
          textStyle={styles.checkboxText}
          onPress={(isChecked: boolean) => {
            setVibration(isChecked);
          }}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{`Work counter: ${workCounter}`}</Text>
        <Text style={styles.title}>{`Break counter: ${breakCounter}`}</Text>
        <Text style={styles.title}>{`Work duration: ${convertSecondsToMinutes(workDuration)}`}</Text>
        <Text style={styles.title}>{`Break duration: ${convertSecondsToMinutes(breakDuration)}`}</Text>
      </View>
    </SafeAreaView>
  );
}
