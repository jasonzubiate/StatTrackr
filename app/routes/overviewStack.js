import { createStackNavigator } from "@react-navigation/stack";
import Overview from "../screens/overview";
import AdvancedStats from "../screens/advancedstats";

const Stack = createStackNavigator();
//created this to have navigation for the "Advanced stats button"
export default function OverviewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0D0E0B" },
				headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Overview" component={Overview} options={{ title: "Overview" }} />
      <Stack.Screen
        name="AdvancedStats"
        component={AdvancedStats}
        options={{ title: "Advanced Stats" }}
      />
    </Stack.Navigator>
  );
}
