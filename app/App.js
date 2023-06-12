import "react-native-gesture-handler";
import HomeStack from "./routes/homeStack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import NavigationBar from "./components/NavigationBar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OverviewStack from "./routes/overviewStack";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "sora-thin": require("./assets/fonts/Sora-Thin.ttf"),
    "sora-regular": require("./assets/fonts/Sora-Regular.ttf"),
    "sora-medium": require("./assets/fonts/Sora-Medium.ttf"),
    "sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <NavigationBar />
      
    </NavigationContainer>
  );
}
