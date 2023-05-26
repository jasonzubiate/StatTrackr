import { View } from "react-native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";

export default function Home() {
  // Dummy data for now
  const dataPlayers = [
    {
      class: "player",
      name: "Lebron James",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "player",
      name: "Jamal Murray",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "player",
      name: "Jayson Tatum",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "player",
      name: "Jaylen Brown",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
  ];
  const dataTeams = [
    {
      class: "team",
      name: "Los Angeles Lakers",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "team",
      name: "Philadelphia 76ers",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "team",
      name: "Boston Celtics",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "team",
      name: "Golden State Warriors",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
  ];

  return (
    <View style={globalStyles.container}>
      <LargeCard title={"Favorite Players"} data={dataPlayers} />
      <LargeCard title={"Top Movers"} data={dataTeams} />
    </View>
  );
}
