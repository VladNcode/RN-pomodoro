import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import InputSpinner from 'react-native-input-spinner';
import { Entypo } from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import usePomodoroContext from '../context/usePomodoroContext';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    flex: 1,
    justifyContent: 'center',
  },

  timeInputContainer: {
    alignItems: 'center',
  },
  timeInputLabel: {
    fontFamily: Fonts.Poppins,
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeInput: {
    marginTop: 12,
    width: width * 0.6,
  },
  timeInputNumbers: {
    color: Colors.white,
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
    color: Colors.white,
    fontFamily: Fonts.Poppins,
    textDecorationLine: 'none',
  },
  checkboxInnerIconStyle: {
    borderWidth: 4,
  },
  redBorder: {
    borderColor: Colors.red,
  },
  greenBorder: {
    borderColor: Colors.green,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Fonts.Poppins,
  },
  info: {
    marginTop: 20,
    alignItems: 'center',
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  resetText: {
    color: Colors.white,
    fontFamily: Fonts.Poppins,
    fontSize: 25,
    marginLeft: 16,
  },
});

export default function TabTwoScreen() {
  const {
    autoplay,
    vibration,
    setVibration,
    breakDuration,
    workDuration,
    setAutoplay,
    setWorkDuration,
    setBreakDuration,
    setBreakCounter,
    setWorkCounter,
    setTimerState,
  } = usePomodoroContext();

  const reset = () => {
    setBreakCounter(0);
    setWorkCounter(0);
    setTimerState('work');
  };

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
          colorMax={Colors.yellow}
          color={Colors.red}
          colorMin={Colors.blue}
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
          colorMax={Colors.yellow}
          color={Colors.green}
          colorMin={Colors.blue}
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
          fillColor={Colors.green}
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
          fillColor={Colors.green}
          text="Toggle vibration"
          innerIconStyle={[styles.checkboxInnerIconStyle, vibration ? styles.greenBorder : styles.redBorder]}
          textStyle={styles.checkboxText}
          onPress={(isChecked: boolean) => {
            setVibration(isChecked);
          }}
        />
      </View>

      <RNBounceable style={styles.resetContainer} hitSlop={16} onPress={reset}>
        <Entypo name="back-in-time" size={40} color={Colors.white} />
        <Text style={styles.resetText}>Reset sessions</Text>
      </RNBounceable>
    </SafeAreaView>
  );
}
