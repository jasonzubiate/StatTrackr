import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Overview from "../screens/overview";
import favoriteteams from "../screens/Favoriteteams";
import Favorites from "../screens/favorites";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0D0E0B" },
				headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="Overview"
        component={Overview}
        options={{ title: "Overview" }}
      />
      <Stack.Screen
        name="favoriteteams"
        component={favoriteteams}
        options={{ title: "favoriteteams" }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}