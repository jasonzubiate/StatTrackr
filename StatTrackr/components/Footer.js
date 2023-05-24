import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
	return (
		<View style={styles.footer}>
      <View style={styles.icon}>
        <Text style={styles.pageTitle}></Text>
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#0D0E0B",
		height: 64,
	},
});
