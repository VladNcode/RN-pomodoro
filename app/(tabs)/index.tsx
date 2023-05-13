import { StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { usePomodoroContext } from '../context/usePomodoroContext';

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
});

export default function TabOneScreen() {
  const { settings } = usePomodoroContext();

  console.log(settings.test);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="src/(tabs)/index.tsx" />
    </View>
  );
}
