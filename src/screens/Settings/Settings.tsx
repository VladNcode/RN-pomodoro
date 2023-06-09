import { Entypo } from '@expo/vector-icons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import InputSpinner from 'react-native-input-spinner';

import { Colors } from '../../constants';
import usePomodoroContext from '../../context/usePomodoroContext';
import { getRandomString } from '../../utils/utils';
import { styles } from './styles';

export const Settings = () => {
  const {
    autoplay,
    vibration,
    breakDuration,
    workDuration,
    sound,
    selectedMp3,
    playSound,
    setVibration,
    setAutoplay,
    setWorkDuration,
    setBreakDuration,
    setBreakCounter,
    setWorkCounter,
    setTimerState,
    setResetTimer,
    setSound,
    setSelectedMp3,
    setIsPlaying,
  } = usePomodoroContext();

  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Alarm', value: 'alarm1' },
    { label: 'Alarm 2', value: 'alarm2' },
    { label: 'Alarm 3', value: 'alarm3' },
    { label: 'Alarm 4', value: 'alarm4' },
    { label: 'Alarm 5', value: 'alarm5' },
    { label: 'Alarm 6', value: 'alarm6' },
    { label: 'Alarm 7', value: 'alarm7' },
    { label: 'Alarm 8', value: 'alarm8' },
    { label: 'Alarm 9', value: 'alarm9' },
    { label: 'Alarm 10', value: 'alarm10' },
    { label: 'Alarm 11', value: 'alarm11' },
    { label: 'Alarm 12', value: 'alarm12' },
  ]);

  const reset = () => {
    setIsPlaying(false);
    setBreakCounter(0);
    setWorkCounter(0);
    setTimerState('work');
    setResetTimer(getRandomString());
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
            if (typeof num === 'number') {
              setWorkDuration(num * 60);
              reset();
            }
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
            if (typeof num === 'number') {
              setBreakDuration(num * 60);
              reset();
            }
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

        <BouncyCheckbox
          style={styles.checkbox}
          size={30}
          fillColor={Colors.green}
          text="Toggle sound"
          innerIconStyle={[styles.checkboxInnerIconStyle, sound ? styles.greenBorder : styles.redBorder]}
          textStyle={styles.checkboxText}
          onPress={(isChecked: boolean) => {
            setSound(isChecked);
          }}
        />
      </View>

      {sound ? (
        <DropDownPicker
          style={[styles.mainDropPicker, disabled && styles.disabledPicker]}
          listItemContainerStyle={styles.dropPickerListItemContainerStyle}
          containerStyle={styles.dropPickerContainerStyle}
          textStyle={styles.dropPickerTextStyle}
          labelStyle={[styles.dropPickerLabelStyle]}
          onChangeValue={value => {
            if (value) playSound();

            setDisabled(true);
            setTimeout(() => {
              setDisabled(false);
            }, 5000);
          }}
          disabled={disabled}
          theme="DARK"
          open={open}
          value={selectedMp3}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedMp3}
          setItems={setItems}
          placeholder="Select sound"
        />
      ) : (
        <View style={styles.dropPickerPlaceholderView} />
      )}

      <RNBounceable style={styles.resetContainer} hitSlop={16} onPress={reset}>
        <Entypo name="back-in-time" size={40} color={Colors.white} />
        <Text style={styles.resetText}>Reset sessions</Text>
      </RNBounceable>
    </SafeAreaView>
  );
};
