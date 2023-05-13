import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  nagativeMB: {
    marginBottom: -3,
  },
  marginRight: {
    marginRight: 15,
  },
  opacityPressed: {
    opacity: 0.5,
  },
  opacityUnpressed: {
    opacity: 1,
  },
});

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  const { name, color } = props;
  return <FontAwesome size={28} style={styles.nagativeMB} name={name} color={color} />;
}

const tabBarIcon = ({ color }: { color: string }) => <TabBarIcon name="code" color={color} />;

const headerRight = () => (
  <Link href="/modal" asChild>
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors.dark.text}
          style={[styles.marginRight, pressed ? styles.opacityPressed : styles.opacityUnpressed]}
        />
      )}
    </Pressable>
  </Link>
);

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Pomodoro', tabBarIcon, headerRight }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon }} />
    </Tabs>
  );
}
