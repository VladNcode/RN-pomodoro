import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { PomorodoContextProvider } from '../context/PomodoroContext';
import globalStyles from '../constants/globalStyles';

export { ErrorBoundary } from 'expo-router';

const RootLayoutNav = () => {
  const options = {
    title: 'Info',
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold' as const,
    },
  };

  return (
    <PomorodoContextProvider>
      <ThemeProvider
        value={{
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            card: DarkTheme.colors.background,
          },
        }}>
        <GestureHandlerRootView style={globalStyles.flexOne}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={options} />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </PomorodoContextProvider>
  );
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}
