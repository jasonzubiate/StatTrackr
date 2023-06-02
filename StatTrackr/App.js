import HomeStack from "./routes/homeStack";
import FavoritesStack from "./routes/favoritesStack";
import NavigationBar from "./components/NavigationBar";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { useFonts } from "expo-font";

const TabNavigator = createBottomTabNavigator({
	Home: { screen: HomeStack },
	Favorites: { screen: FavoritesStack },
});

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
	const [LoadedFonts] = useFonts({
		"sora-thin": require("./assets/fonts/Sora-Thin.ttf"),
		"sora-regular": require("./assets/fonts/Sora-Regular.ttf"),
		"sora-medium": require("./assets/fonts/Sora-Medium.ttf"),
		"sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
		"sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
	});

	if (LoadedFonts) {
		return (
			<>
				<AppContainer />
				<NavigationBar />
			</>
		);
	} else {
		return null;
	}
}
