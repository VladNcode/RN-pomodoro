import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fullBlack,
  },
  text: {
    marginTop: 12,
    marginHorizontal: 16,
    fontFamily: Fonts.Poppins,
    textAlign: 'justify',
    color: Colors.white,
    fontSize: 13,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
