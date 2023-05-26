import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function StatCard({ item }) {
  console.log(item.name)
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.img}>{/* player img */}</View>
      <View style={styles.stats}>
        <View style={styles.header}>
          <Text style={styles.name}>{item}</Text>
          <Text style={styles.position}>{item.position}</Text>
        </View>
        <View style={styles.labels}>
          <Text style={styles.label}>Points: </Text>
          <Text style={styles.value}>32</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5A5959",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  name: {
    fontSize: 12,
  },
  position: {
    fontSize: 12,
    fontWeight: 100,
  },
  labels: {
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
  },
});
