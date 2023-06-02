import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/home";
import Overview from "../screens/overview";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "StatTrackr",
    },
  },
  Overview: {
    screen: Overview,
    navigationOptions: {
      title: "Player Overview",
    },
  },
};
const HomeStack = createStackNavigator(screens, {
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

export default HomeStack;
