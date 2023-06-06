import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Overview({ route }) {
	const { name, playerClass, stats } = route.params;

	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.p}>Player Overview</Text>
			<Text style={globalStyles.p}>{name}</Text>
			<Text style={globalStyles.p}>{playerClass}</Text>
			<Text style={globalStyles.p}>{JSON.stringify(stats)}</Text>
		</View>
	);
}
