import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

interface TabBarIonIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  activeColor: string;
  inactiveColor: string;
  focused: boolean;
}

interface IconProps {
  focused: boolean;
}

const headerRight = () => (
  <Link href="/modal" asChild>
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors.gray}
          style={[styles.marginRight, pressed ? styles.opacityPressed : styles.opacityUnpressed]}
        />
      )}
    </Pressable>
  </Link>
);

const TabBarIonIcon = (props: TabBarIonIconProps) => {
  const { name, activeColor, inactiveColor, focused } = props;
  return <Ionicons size={28} style={styles.nagativeMB} name={name} color={focused ? activeColor : inactiveColor} />;
};

const timerIcon = ({ focused }: IconProps) => (
  <TabBarIonIcon name="timer-outline" activeColor={Colors.white} inactiveColor={Colors.gray} focused={focused} />
);
const settingsIcon = ({ focused }: IconProps) => (
  <TabBarIonIcon name="settings-outline" activeColor={Colors.white} inactiveColor={Colors.gray} focused={focused} />
);

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pomodoro',
          tabBarLabel: 'Timer',
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.gray,
          tabBarIcon: timerIcon,
          headerRight,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.gray,
          tabBarIcon: settingsIcon,
        }}
      />
    </Tabs>
  );
}
