import { Dimensions, StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    zIndex: -1,
  },
  resetText: {
    color: Colors.white,
    fontFamily: Fonts.Poppins,
    fontSize: 25,
    marginLeft: 16,
  },

  mainDropPicker: { width: width * 0.6, alignSelf: 'center', backgroundColor: '#242424', borderRadius: 10 },
  dropPickerListItemContainerStyle: { backgroundColor: '#242424' },
  dropPickerContainerStyle: {
    backgroundColor: '#242424',
    width: width * 0.6,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  dropPickerTextStyle: {
    fontFamily: Fonts.Poppins,
    color: Colors.white,
    fontSize: 15,
  },
  dropPickerLabelStyle: {
    fontFamily: Fonts.Poppins,
    color: Colors.white,
  },
  dropPickerPlaceholderView: {
    height: 70,
  },
  disabledPicker: { backgroundColor: 'gray' },
});
