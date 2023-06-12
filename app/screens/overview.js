import { StyleSheet, Text, View, Image, ScrollView, useState } from "react-native";
import { globalStyles } from "../styles/global";
import StatCard from "../components/StatCard";
import LargeCard from "../components/LargeCard";
import Header from "../components/Header";
import Season from "../components/Seasoncard";
import OverviewStats from "../components/OverviewStatsCard";
import PreviousGame from "../components/PreviousCard";
import RecentGames from "../components/RecentGamesCard";
import PlayerCard from "../components/PlayerCard";
import OverviewBar from "../components/OverviewBar";

export default function Overview({ navigation }) {
	
	const item = {
		stats: [
		  { "Stat 1": 10 },
		  { "Stat 2": 20 },
		  { "Stat 3": 30 },
		],
	  };

	  const scores1 = [
		{ label: "PPG", value: "28.9" },
		{ label: "APG", value: "6.8" },
		{ label: "RPG", value: "8.3" },
		{ label: "SPG", value: "0.9" },
		{ label: "BPG", value: "0.6" },
		{ label: "FG%", value: "50" },
	  ];

	  const scores2 = [
		{ label: "PTS", value: "41" },
		{ label: "AST", value: "8" },
		{ label: "REB", value: "9" },
		{ label: "STL", value: "0" },
		{ label: "BLK", value: "0" },
		{ label: "FG%", value: "50" },
	  ];

	return (
		<ScrollView style={globalStyles.container}>
			{/* <Text style={globalStyles.p}>Player Overview</Text>
			<Text style={globalStyles.p}>{name}</Text>
			<Text style={globalStyles.p}>{playerClass}</Text>
			<Text style={globalStyles.p}>{JSON.stringify(stats)}</Text> */}
			<PlayerCard imageSource={require("../assets/img/lebronOverview.png")}/>
			<OverviewBar navigation={navigation}/>
			<Season scores={scores1} style={globalStyles.p}/>
			<OverviewStats style={globalStyles.p}/>
			<PreviousGame scores={scores2} style={globalStyles.p}/>
			<RecentGames style={globalStyles.p}/>
		</ScrollView>
	);
}


