import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.link}>Home</Text>
      <Text style={styles.link}>Favorites</Text>
      <Text style={styles.link}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0D0E0B",
    paddingLeft: 48,
    paddingRight: 48,
    paddingBottom: 16,
    height: 80,
  },
  link: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "sora-regular"
  },
});
