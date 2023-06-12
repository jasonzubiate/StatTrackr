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
import OverviewBar from "../components/OverviewBar";
import ODPstats from "../components/ODPstats";
import Chart from "../components/Chart";
import Heatmap from "../components/HeatMap";

export default function AdvancedStats({navigation }) {
    const scores1 = [
		{ label: "PTS", value: "41" },
		{ label: "AST", value: "8" },
		{ label: "REB", value: "9" },
		{ label: "STL", value: "0" },
		{ label: "BLK", value: "0" },
		{ label: "FG%", value: "50" },
	  ];

    return (
        <ScrollView style={globalStyles.container}> 
            <PlayerCard imageSource={require("../assets/img/lebronOverview.png")}/>
            <OverviewBar/>
            <PreviousGame scores={scores1}/>
           <ODPstats imageSource={require('../assets/img/offenseimg.png')}/>
           <Chart imageSource={require('../assets/img/stats.png')}/>
           <Heatmap imageSource={require('../assets/img/heatmap.png')}/>

        </ScrollView>
    )
}