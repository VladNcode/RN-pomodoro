import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
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
