import { View } from "react-native";
import { globalStyles } from "../styles/global";
import LargeCard from "../components/LargeCard";
import StatCard from "../components/StatCard";


export default function Home({ navigation }) {
  const dataPlayers = [
    {
      class: "player",
      frameImage: require("../assets/img/Frame52.png"),
      frameprogress: require("../assets/img/up2.png"),
      name: "Lebron James",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "player",
      frameImage: require("../assets/img/Jamal_Murry.png"),
      frameprogress: require("../assets/img/Jamal.png"),
      name: "Jamal Murray",
      position: "Guard",
      stats: [{ SeasonRating: 89 }, { PreviousRating: 84 }],
    },
    {
      class: "player",
      frameImage: require("../assets/img/Jayson_Tatum.png"),
      frameprogress: require("../assets/img/6Jayson_down.png"),
      name: "Jayson Tatum",
      position: "SF",
      stats: [{ SeasonRating: 89 }, { PreviousRating: 86 }],
    },
    {
      class: "player",
      frameImage: require("../assets/img/Jaylen_Brown.png"),
      frameprogress: require("../assets/img/Jaylen_up.png"),
      name: "Jaylen Brown",
      position: "SF",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 93 }],
    },
  ];
  const dataTeams = [
    {
      class: "team",
      frameImage: require("../assets/img/lakers2.png"),
      frameprogress: require("../assets/img/up2.png"),
      name: "Los Angeles Lakers",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "team",
      frameImage: require("../assets/img/76ers.png"),
      frameprogress: require("../assets/img/Jamal.png"),
      name: "Philadelphia 76ers",
      stats: [{ SeasonRating: 89 }, { PreviousRating: 84 }],
    },
    {
      class: "team",
      frameImage: require("../assets/img/Boston.png"),
      frameprogress: require("../assets/img/up2.png"),
      name: "Boston Celtics",
      stats: [{ SeasonRating: 87 }, { PreviousRating: 89 }],
    },
    {
      class: "team",
      frameImage: require("../assets/img/GS.png"),
      frameprogress: require("../assets/img/Jamal.png"),
      name: "Golden State Warriors",
      stats: [{ SeasonRating: 88 }, { PreviousRating: 82 }],
    },
  ];

  return (
    <View style={globalStyles.container}>
      <LargeCard title={"Top Movers"} data={dataPlayers} navigation={navigation} />
      <LargeCard title={"Top Movers"} data={dataTeams} navigation={navigation} />
    </View>
  );
}
