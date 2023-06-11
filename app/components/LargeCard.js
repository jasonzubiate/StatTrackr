import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatCard from "./StatCard";

export default function LargeCard({ navigation, title, data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item) => {
        return (
          <StatCard item={item} navigation={navigation} key={item.name} />
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
});
