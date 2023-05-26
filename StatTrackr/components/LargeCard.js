import { StyleSheet, Text, View, FlatList } from "react-native";
import StatCard from "./StatCard";

// This component is used to display all of Favorite Players, Suggested Players, Favorite Teams, etc.
// Takes two properties, the title for the card and the data that will be displayed in the card.
export default function LargeCard({ title, data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item) => {
         return (
          <StatCard item={item}/>
         )
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
