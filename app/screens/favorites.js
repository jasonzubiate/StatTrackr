import React from "react";
import { View, Button, TouchableOpacity, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";
import LargeCard_fav from "../components/LargeCard_fav";
import LargeCard_fav2 from "../components/LargeCard_fav2";
import favoriteteamsStack from "../routes/favoriteteamsStack";
import Favoriteteams from "./favoriteteams";
import Overview from "./overview";
import FavoritesStack from "../routes/favoritesStack";

export default function Favorites(navigation2) {
	const navigation = useNavigation();
	navigation2 = FavoritesStack()
	
	// Dummy data for now
	const dataPlayers = [
		{
			class: "player",
			name: "Lebron James",
			frameImage: require("../assets/img/lbfave.png"),
			position: "SF Season Rating  87",
			stats: [{ Points: 32 }, { FG: '50%' }, { Assists: 5 }, { Rating: 89 }],
		},
		{
			class: "player",
			name: "Jamal Murray",
			frameImage: require("../assets/img/jmfave.png"),
			position: "Guard Season Rating  89",
			stats: [{ Points: 22 }, { FG: '47%' }, { Assists: 8 }, { Rating: 89 }],
		},
		{
			class: "player",
			name: "Jayson Tatum",
			frameImage: require("../assets/img/jtfave.png"),
			position: "SF Season Rating  89",
			stats: [{ Points: 32 }, { FG: '52%' }, { Assists: 5 }, { Rating: 86 }],
		},
		{
			class: "player",
			name: "Jaylen Brown",
			frameImage: require("../assets/img/jbfave.png"),
			position: "SF Season Rating  87",
			stats: [{ Points: 32 }, { FG: '61%' }, { Assists: 5 }, { Rating: 93 }],
		},

		{
			class: "player",
			name: "Nikola Jokic",
			frameImage: require("../assets/img/nikola.png"),
			position: "C Season Rating  99",
			stats: [{ Points: 99 }, { FG: '99%' }, { Assists: 5 }, { Rating: 95 }],
		},
	];

	const dataPlayers2 = [
		{
			class: "player",
			name: "Stephen Curry",
			frameImage: require("../assets/img/scfave.png"),
			position: "SF Season Rating  87",
			stats: [{ Points: 12 }, { FG: '45%' }, { Assists: 5 }, { Rating: 84 }],
		},
		{
			class: "player",
			name: "Joel Embiid",
			frameImage: require("../assets/img/jefave.png"),
			position: "SF Season Rating  0",
			stats: [{ Points: 0 }, { FG: '0%' }, { Assists: 0 }, { Rating: 0 }],
		},
		{
			class: "player",
			name: "Giannis",
			frameImage: require("../assets/img/gafave.png"),
			position: "SF Season Rating  99",
			stats: [{ Points: 32 }, { FG: '42%' }, { Assists: 5 }, { Rating: 93 }],
		},
		
	];


	return (
		<View style={globalStyles.container}>
		  <View style={styles.header}>
			<TouchableOpacity
			  onPress={() => {
				navigation.navigate("favoriteteams", Favoriteteams);
			  }}
			>
			  <Image
				source={require("../assets/img/nav_bar.png")}
				style={styles.logo}
			  />
			</TouchableOpacity>
			
		  </View>
		  <TouchableOpacity
			  onPress={() => {
				navigation.navigate("Overview", Favoriteteams);
			  }}
			>
			  <LargeCard_fav title={"Favorite Players"} data={dataPlayers} navigation = {navigation2}
			  style={styles.box} />
		  <LargeCard_fav2 title={"Suggested Players"} data={dataPlayers2} navigation = {navigation2} />
			</TouchableOpacity>
		  
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
	  box: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 0,
		paddingHorizontal: 0,
		marginBottom: 0,
		paddingBottom: 20,
	  },
	});
