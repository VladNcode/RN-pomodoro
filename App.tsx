import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Colors from './src/constants/Colors';
import globalStyles from './src/constants/globalStyles';
import { PomorodoContextProvider } from './src/context/PomodoroContext';
import Main from './src/screens/Main/Main';
import Settings from './src/screens/Settings/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    ...FontAwesome.font,
  });

  const options = {
    title: 'Info',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold' as const,
    },
  };

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) return <Text>Loading...</Text>;

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
          <Tab.Navigator>
            <Tab.Screen
              name="Main"
              component={Main}
              options={{
                title: 'Pomodoro',
                headerTintColor: Colors.white,
                headerTitleStyle: {
                  fontWeight: 'bold' as const,
                },
              }}
            />
            <Tab.Screen name="Settings" component={Settings} options={options} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </PomorodoContextProvider>
  );
}
