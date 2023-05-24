import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
	return (
		<>
			<Header />
			<View style={styles.container}>
				<Text style={styles.text}>StatTrackr</Text>
				<StatusBar style="auto" />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#252525",
	},
	text: {
		color: "white",
	},
});
