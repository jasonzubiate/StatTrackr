import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function StatCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.img}>{/* player img */}</View>
      <View style={styles.stats}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.position}>{item.position}</Text>
        </View>
        <View style={styles.labels}>
          {item.stats.map( stat  => {
            const [key, value] = Object.entries(stat)[0];
            return (
              <View style={styles.label}>
                <Text style={styles.key}>{key}</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            );
          })}
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
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    gap: 4,
  },
  stats: {
    gap: 4
  },
  name: {
    fontSize: 14,
    fontFamily: "sora-semibold",
    color: "white",
  },
  position: {
    fontSize: 14,
    fontFamily: "sora-thin",
    color: "white",
  },
  labels: {
    flexDirection: "row",
    gap: 8,
  },
  label: {
    flexDirection: "row",
    gap: 4,
  },
  key: {
    fontSize: 14,
    fontFamily: "sora-medium",
    color: "white",
  },
  value: {
    fontSize: 14,
    fontFamily: "sora-regular",
    color: "white",
  },
});
