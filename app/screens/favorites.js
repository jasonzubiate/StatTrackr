import { View } from "react-native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";

export default function Favorites() {
  // Dummy data for now
  const dataPlayers = [
    {
      class: "player",
      name: "Lebron James",
      position: "SF",
      stats: [{ Points: 32 }, { Rebounds: 5 }, { Assists: 5 }, { Rating: 89 }],
    },
    {
      class: "player",
      name: "Jamal Murray",
      position: "SF",
      stats: [{ Points: 32 }, { Rebounds: 5 }, { Assists: 5 }, { Rating: 89 }]    },
    {
      class: "player",
      name: "Jayson Tatum",
      position: "SF",
      stats: [{ Points: 32 }, { Rebounds: 5 }, { Assists: 5 }, { Rating: 89 }]    },
    {
      class: "player",
      name: "Jaylen Brown",
      position: "SF",
      stats: [{ Points: 32 }, { Rebounds: 5 }, { Assists: 5 }, { Rating: 89 }]    },
  ];

  return (
    <View style={globalStyles.container}>
      <LargeCard title={"Favorite Players"} data={dataPlayers} />
      <LargeCard title={"Suggested Players"} data={dataPlayers} />
    </View>
  );
}
 