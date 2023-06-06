import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../routes/homeStack";
import FavoritesStack from "../routes/favoritesStack";
import { Ionicons } from "@expo/vector-icons";

const Nav = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Nav.Navigator
      screenOptions={{
        tabBarStyle: styles.nav,
        tabBarActiveTintColor: "#FFA500",
        tabBarInactiveTintColor: "white",
        headerShown: false,
      }}
    >
      <Nav.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Nav.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
          tabBarLabel: "Favorites",
        }}
      />
    </Nav.Navigator>
  );
}
const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#0D0E0B",
    height: 85,
    paddingTop: 5,
  },
  link: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "sora-regular",
  },
});
