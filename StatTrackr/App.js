import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";

export default function App() {
  // Dummy data for now
  const data = {
    "Lebron James": {
      Position: "SF",
      stats: { Points: 32, Rebounds: 5, Assists: 5, Rating: 89 },
    },
    "Steph Curry": {
      Position: "SF",
      stats: { Points: 32, Rebounds: 5, Assists: 5, Rating: 89 },
    },
    "Jimmy Butler": {
      Position: "SF",
      stats: { Points: 32, Rebounds: 5, Assists: 5, Rating: 89 },
    },
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LargeCard title={"Favorite Players"} data={data} />
        <LargeCard title={"Suggested Players"} data={data} />
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#252525",
    gap: 16,
  },
  text: {
    color: "white",
  },
});
