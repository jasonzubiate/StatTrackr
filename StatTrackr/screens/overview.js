import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Overview({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.p}>Player Overview</Text>
      <Text style={globalStyles.p}>{navigation.getParam("name")}</Text>
      <Text style={globalStyles.p}>{navigation.getParam("position")}</Text>
      <Text style={globalStyles.p}>{navigation.getParam("class")}</Text>
      <Text style={globalStyles.p}>{navigation.getParam("stats")}</Text>
    </View>
  );
}
