
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavigtionBar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'lightgray', padding: 10 }}>
      <Text>Nav</Text>
      {/* <TouchableOpacity onPress={navigateToHome}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToFavorites}>
        <Text>Favorites</Text>
      </TouchableOpacity> */}
    </View>
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
