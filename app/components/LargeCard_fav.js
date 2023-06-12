import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StatCard from "./StatCard";
import StatCard_fav_teams from "./StatCard_fav_teams";

export default function LargeCard_fav({ navigation, title, data }) {
  return (
    <View style={styles.card}>
              <Text style={styles.previousGameStats}>Previous Game Stats</Text>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.previousGameStats}>Previous Game Stats</Text>
      {data.map((item, index) => {
        const isLastItem = index === data.length - 1;
        return (
          <View style={{ marginBottom: isLastItem ? 20 : 0 }} key={item.name}>
            <StatCard_fav_teams item={item} navigation={navigation} />
          </View>
        );
      })}
      <Image
        source={require("../assets/img/add.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#3C3A3A",
  },
  title: {
    color: "white",
    fontFamily: "sora-semibold",
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    position: "absolute",
    bottom: 10,
    right: 13,
    width: 35,
    height: 35,
  },
  previousGameStats: {
    position: "absolute",
    top: 15,
    right: 12,
    color: "white",
    fontFamily: "sora-light",
    fontSize: 12,
  },
});


