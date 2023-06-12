import React from "react";
import { View, Button, TouchableOpacity, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";
import LargeCard_fav from "../components/LargeCard_fav";
import LargeCard_fav2 from "../components/LargeCard_fav2";
import favoriteteamsStack from "../routes/favoriteteamsStack";
import Favorites from "./favorites";

export default function Favoriteteams() {
	const navigation = useNavigation();
	
	// Dummy data for now
	const dataPlayers = [
		{
			class: "team",
			name: "Los Angles Lakers",
			frameImage: require("../assets/img/laker_fav.png"),
			position: " Season Rating 87",
			stats: [{ Points: 121 }, { FG: '50%' }, { Assists: 30 }, { Rating: 89 }],
		},
		{
			class: "team",
			name: "Boston Celtics",
			frameImage: require("../assets/img/celtics_fav.png"),
			position: " Season Rating 90",
			stats: [{ Points: 125 }, { FG: '47%' }, { Assists: 42 }, { Rating: 92 }],
		},
		{
			class: "team",
			name: "Philadelphia 76ers",
			frameImage: require("../assets/img/76ers_fav.png"),
			position: " Seaon Rating 72",
			stats: [{ Points: 100 }, { FG: '52%' }, { Assists: 28 }, { Rating: 86 }],
		},
		{
			class: "player",
			name: "Charlotte Hornets",
			frameImage: require("../assets/img/hornets_fav.png"),
			position: " Season Rating 86",
			stats: [{ Points: 98 }, { FG: '61%' }, { Assists: 18 }, { Rating: 82 }],
		},

		{
			class: "player",
			name: "Atlanta Hawks",
			frameImage: require("../assets/img/hawks_fav.png"),
			position: " Season Rating 82",
			stats: [{ Points: 99 }, { FG: '48%' }, { Assists: 15 }, { Rating: 78 }],
		},
	];

	const dataPlayers2 = [
		{
			class: "player",
			name: "Miami Heat",
			frameImage: require("../assets/img/heat_fav.png"),
			position: " Season Rating 89",
			stats: [{ Points: 112 }, { FG: '45%' }, { Assists: 27 }, { Rating: 88 }],
		},
		{
			class: "player",
			name: "Golden State Warriors",
			frameImage: require("../assets/img/gs_fav.png"),
			position: " Season Rating 69",
			stats: [{ Points: 101 }, { FG: '42%' }, { Assists: 26 }, { Rating: 51 }],
		},
		{
			class: "player",
			name: "Milwaukee Bucks",
			frameImage: require("../assets/img/MB_fav.png"),
			position: " Season Rating 94",
			stats: [{ Points: 113 }, { FG: '49%' }, { Assists: 28 }, { Rating: 93 }],
		},
		
	];


	return (
		<View style={globalStyles.container}>
		  <View style={styles.header}>
			<TouchableOpacity
			  onPress={() => {
				navigation.navigate("Favorites", Favorites);
			  }}
			>
			  <Image
				source={require("../assets/img/fav_teams.png")}
				style={styles.logo}
			  />
			</TouchableOpacity>
			
		  </View>
		  <LargeCard_fav title={"Favorite Players"} data={dataPlayers} />
		  <LargeCard_fav2 title={"Suggested Players"} data={dataPlayers2} />
		</View>
	  );
	}
	
	const styles = StyleSheet.create({
	  header: {
		flexDirection: "row",
		alignItems: "left",
		paddingTop: 0,
		paddingHorizontal: 0,
		marginBottom: 0,
	  },
	  logo: {
		width: 400,
		height: 30,
	  },
	});
