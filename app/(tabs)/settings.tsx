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

export default function TabTwoScreen() {
  const { settings } = usePomodoroContext();
  console.log(settings.test2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="src/(tabs)/settings.tsx" />
    </View>
  );
}
