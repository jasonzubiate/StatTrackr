import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/favorites";
import Overview from "../screens/overview";

const Stack = createStackNavigator();

export default function FavoritesStack() {
	return (
		<Stack.Navigator>
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
