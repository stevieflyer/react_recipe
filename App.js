import {StyleSheet} from 'react-native';
import MealsNavigator from "./navigation/MealsNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {useEffect, useState} from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const loadFonts = async () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect( ()=> {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }
    prepare().then();
  }, [])

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <MealsNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
