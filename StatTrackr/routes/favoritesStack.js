import { createStackNavigator } from '@react-navigation/stack';
import Favorites from "../screens/favorites";
import Overview from "../screens/overview";


const screens = {
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: "Favorites",
    },
  },
  Overview: {
    screen: Overview,
    navigationOptions: {
      title: "Overview",
    },
  },
};
const FavoritesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#0D0E0B",
    },
    headerTitleStyle: {
      color: "white",
      fontFamily: "sora-bold",
      fontSize: 18,
      letterSpacing: 1,
    },
  },
});

export default FavoritesStack;
