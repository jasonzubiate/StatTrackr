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

export default function AdvancedStats({navigation }) {
    return (
        <ScrollView>

            <PlayerCard/>

        </ScrollView>
    )
}