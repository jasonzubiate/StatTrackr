import { StyleSheet, Text, View, FlatList } from "react-native";
import StatCard from "./StatCard";

// This component is used to display all of Favorite Players, Suggested Players, Favorite Teams, etc.
// Takes two properties, the title for the card and the data that will be displayed in the card.
export default function LargeCard({ title, data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={data} renderItem={(item) => <StatCard item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#5A5959",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
