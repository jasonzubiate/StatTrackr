import { StyleSheet, Text, View } from "react-native";

export default function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>StatTrackr</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#0D0E0B",
		height: 100,
    paddingTop: 50,
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		letterSpacing: 1,
	},
});
