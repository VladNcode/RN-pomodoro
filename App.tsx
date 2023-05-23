import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Colors, globalStyles } from './src/constants';
import { PomorodoContextProvider } from './src/context/PomodoroContext';
import { Main, ModalScreen, Settings } from './src/screens';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface TabBarIonIconProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  activeColor: string;
  inactiveColor: string;
  focused: boolean;
}

interface IconProps {
  focused: boolean;
}

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

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.getParent()?.navigate('Modal')}>
      {({ pressed }) => (
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors.gray}
          style={[globalStyles.largeMarginRight, pressed ? globalStyles.opacityPressed : globalStyles.opacityUnpressed]}
        />
      )}
    </Pressable>
  );
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: Colors.white,
      headerTitleStyle: { fontWeight: 'bold' as const },
      tabBarActiveTintColor: Colors.white,
      tabBarInactiveTintColor: Colors.gray,
    }}>
    <Tab.Screen
      name="Main"
      component={Main}
      options={{
        title: 'Pomodoro',
        headerRight: HeaderRight,
        tabBarIcon: timerIcon,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        title: 'Settings',
        tabBarIcon: settingsIcon,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) return <ActivityIndicator size="large" />;

  return (
    <PomorodoContextProvider>
      <GestureHandlerRootView style={globalStyles.flexOne}>
        <NavigationContainer
          theme={{
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              card: DarkTheme.colors.background,
            },
          }}>
          <RootStack.Navigator>
            <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <RootStack.Screen
              name="Modal"
              component={ModalScreen}
              options={{
                presentation: 'modal',
                title: 'Info',
                headerBackTitle: 'Back',
                headerTintColor: Colors.white,
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </PomorodoContextProvider>
  );
}
