import { View } from "react-native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";

export default function Favorites() {
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
    <View style={globalStyles.container}>
      <LargeCard title={"Favorite Players"} data={data} />
      <LargeCard title={"Suggested Players"} data={data} />
    </View>
  );
}
