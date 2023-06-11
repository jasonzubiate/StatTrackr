import { StyleSheet, Text, View, Image } from "react-native";

export default function PlayerCard() {
    return (
        <View>
            <Image
                source={require("../assets/img/lebronOverview.png")}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 360,
        resizeMode: "contain",
    }
  });