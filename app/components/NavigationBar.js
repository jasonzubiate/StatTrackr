
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from '../routes/homeStack';
import FavoritesStack from '../routes/favoritesStack';

const Nav = createMaterialBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Nav.Navigator>
			<Nav.Screen name="Home" component={HomeStack}/>
			<Nav.Screen name="Favorites" component={FavoritesStack}/>
		</Nav.Navigator>
  )
}
const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#0D0E0B",
		paddingLeft: 48,
		paddingRight: 48,
		paddingBottom: 16,
		height: 80,
	},
	link: {
		fontSize: 16,
		color: "#FFFFFF",
		fontFamily: "sora-regular",
	},
});
