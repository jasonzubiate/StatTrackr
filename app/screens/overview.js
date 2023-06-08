import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import StatCard from "../components/StatCard";
import LargeCard from "../components/LargeCard";
import Header from "../components/Header";
import Season from "../components/Seasoncard";
import OverviewStats from "../components/OverviewStatsCard";
import PreviousGame from "../components/PreviousCard";
import RecentGames from "../components/RecentGamesCard";
import PlayerCard from "../components/PlayerCard";

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
		<ScrollView style={globalStyles.container}>
			{/* <Text style={globalStyles.p}>Player Overview</Text>
			<Text style={globalStyles.p}>{name}</Text>
			<Text style={globalStyles.p}>{playerClass}</Text>
			<Text style={globalStyles.p}>{JSON.stringify(stats)}</Text> */}
			<PlayerCard/>
			<Season style={globalStyles.p}/>
			<OverviewStats style={globalStyles.p}/>
			<PreviousGame style={globalStyles.p}/>
			<RecentGames style={globalStyles.p}/>
		</ScrollView>
	);
}


