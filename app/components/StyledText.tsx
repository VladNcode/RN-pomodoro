import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
  },
});

export default function MonoText(props: TextProps) {
  const { style } = props;
  return <Text {...props} style={[style, styles.fontFamily]} />;
}
