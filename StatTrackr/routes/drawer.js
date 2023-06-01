import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import FavoritesStack from "./favoritesStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Favorites: {
    screen: FavoritesStack,
  },
});

// const RootDrawerNavigator = createDrawerNavigator();
// function RootDrawer() {
// 	return (
// 		<Drawer.Navigator>
// 			<Drawer.Sceen name={"Home"} component={HomeStack} />
// 			<Drawer.Sceen name={"Favorites"} component={FavoritesStack} />
// 		</Drawer.Navigator>
// 	);
// }

export default createAppContainer(RootDrawerNavigator);
