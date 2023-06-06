import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Overview from "../screens/overview";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
			<Stack.Screen
				name="Overview"
				component={Overview}
				options={{ title: "Overview" }}
			/>
		</Stack.Navigator>
	);
}

// const d = createStackNavigator(screens, {
// 	defaultNavigationOptions: {
// 		headerStyle: {
// 			backgroundColor: "#0D0E0B",
// 		},
// 		headerTitleStyle: {
// 			color: "white",
// 			fontFamily: "sora-bold",
// 			fontSize: 18,
// 			letterSpacing: 1,
// 		},
// 	},
// });
