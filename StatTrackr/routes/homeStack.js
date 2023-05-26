import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import PlayerOverview from "../screens/playerOverview";

const screens = {
  Home: {
    screen: Home,
  },
  PlayerOverview: {
    screen: PlayerOverview,
  }

};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
