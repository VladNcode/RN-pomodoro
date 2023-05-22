import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '../../constants/Colors';
import globalStyles from '../../constants/globalStyles';

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
          style={[globalStyles.largeMarginRight, pressed ? globalStyles.opacityPressed : globalStyles.opacityUnpressed]}
        />
      )}
    </Pressable>
  </Link>
);

const TabBarIonIcon = (props: TabBarIonIconProps) => {
  const { name, activeColor, inactiveColor, focused } = props;
  return <Ionicons size={28} name={name} color={focused ? activeColor : inactiveColor} />;
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
