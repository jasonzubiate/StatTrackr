import { createDrawerNavigator } from "react-navigation-drawer";
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

export default createAppContainer(RootDrawerNavigator);
