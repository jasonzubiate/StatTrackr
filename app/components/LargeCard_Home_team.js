import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatCard from "./StatCard";
import StatCard_Teams from "./StatCard_Teams";

export default function LargeCard_Home_team({ navigation, title, data, additionalText }) {
  return (
    <View style={styles.card}>
      <Text style={styles.additionalText}>{additionalText}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.previousGameStats}>Previous Game Stats</Text>
      {data.map((item) => {
        return (
          <StatCard_Teams item={item} navigation={navigation} key={item.name} />
        );
      })}
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
  additionalText: {
    position: "absolute",
    top: 12,
    right: 12,
    color: "white",
    fontFamily: "sora-semibold",
    fontSize: 12,
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
