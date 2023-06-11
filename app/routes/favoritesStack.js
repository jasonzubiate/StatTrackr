import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/favoriteteams";
import Overview from "../screens/overview";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0D0E0B" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Overview"
        component={Overview}
        options={{ title: "Overview" }}
      />
    </Stack.Navigator>
  );
}
