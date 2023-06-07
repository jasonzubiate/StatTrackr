import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import StatCard from "../components/StatCard";
import LargeCard from "../components/LargeCard";
import Header from "../components/Header";
import Season from "../components/Seasoncard";
import OverviewStats from "../components/OverviewStatsCard";
import PreviousGame from "../components/PreviousCard";

export default function Overview({ route }) {
	const { name, playerClass, stats } = route.params;

	const item = {
		stats: [
		  { "Stat 1": 10 },
		  { "Stat 2": 20 },
		  { "Stat 3": 30 },
		],
	  };

	return (
		<View style={globalStyles.container}>
			{/* <Text style={globalStyles.p}>Player Overview</Text>
			<Text style={globalStyles.p}>{name}</Text>
			<Text style={globalStyles.p}>{playerClass}</Text>
			<Text style={globalStyles.p}>{JSON.stringify(stats)}</Text> */}
			
			<Season style={globalStyles.p}/>
			<OverviewStats style={globalStyles.p}/>
			<PreviousGame style={globalStyles.p}/>
		</View>
	);
}
