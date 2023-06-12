import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Overview from "../screens/overview";
import TeamOverview from "../screens/teamoverview";

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
      // this is changed to TeamOverview just for the team navigation. orginal "Overview"
        name="TeamOverview"
        component={TeamOverview}
        options={{ title: "Overview" }}
      />
    </Stack.Navigator>
  );
}