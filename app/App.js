import "react-native-gesture-handler";
import HomeStack from "./routes/homeStack";
import FavoritesStack from "./routes/favoritesStack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
	const [LoadedFonts] = useFonts({
		"sora-thin": require("./assets/fonts/Sora-Thin.ttf"),
		"sora-regular": require("./assets/fonts/Sora-Regular.ttf"),
		"sora-medium": require("./assets/fonts/Sora-Medium.ttf"),
		"sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
		"sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
	});

	return (
		<NavigationContainer>
			<FavoritesStack />
		</NavigationContainer>
	);
}
