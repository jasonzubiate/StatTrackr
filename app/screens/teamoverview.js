import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import Season from "../components/Seasoncard";
import OverviewStats from "../components/OverviewStatsCard";
import PreviousGame from "../components/PreviousCard";
import RecentGames from "../components/RecentGamesCard";
import PlayerCard from "../components/PlayerCard";
import OverviewBar from "../components/OverviewBar";

export default function TeamOverview({ route, navigation }) {
	const { name, playerClass, stats } = route.params;

	const item = {
		stats: [
		  { "Stat 1": 10 },
		  { "Stat 2": 20 },
		  { "Stat 3": 30 },
		],
	  };
    
      const scores1 = [
		{ label: "PPG", value: "117.2" },
		{ label: "APG", value: "25.3" },
		{ label: "RPG", value: "45.1" },
		{ label: "SPG", value: "6.9" },
		{ label: "BPG", value: "6.5" },
		{ label: "FG%", value: "47.2" },
	  ];

      const scores2 = [
		{ label: "PTS", value: "121" },
		{ label: "AST", value: "30" },
		{ label: "REB", value: "47" },
		{ label: "STL", value: "4" },
		{ label: "BLK", value: "0" },
		{ label: "FG%", value: "44.8" },
	  ];

	return (
		<ScrollView style={globalStyles.container}>
			<PlayerCard imageSource={require('../assets/img/lakersTeam.png')}/>
			<OverviewBar navigation={navigation}/>
			<Season scores={scores1} style={globalStyles.p}/>
			<OverviewStats style={globalStyles.p}/>
			<PreviousGame scores={scores2} style={globalStyles.p}/>
			<RecentGames style={globalStyles.p}/>
		</ScrollView>
	);
}
