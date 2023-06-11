import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function StatCard({ navigation, item}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Overview", item);
      }}
      style={styles.card}
    >
      <Image source={item.frameImage} style={styles.img} />
      
      <View style={styles.stats}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.position}>{item.position}</Text>
        </View>
        
        <View style={styles.labels}>
          {item.stats.map((stat) => {
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
	  <Image source={item.frameprogress} style={styles.img_arrow} />
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
    gap: 4,
  },
  img: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  img_arrow: {
    width: 40,
    height: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 13,
    fontFamily: "sora-semibold",
    color: "white",
  },
  position: {
    fontSize: 13,
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
    fontSize: 13,
    fontFamily: "sora-medium",
    color: "white",
  },
  value: {
    fontSize: 13,
    fontFamily: "sora-regular",
    color: "white",
  },
});
