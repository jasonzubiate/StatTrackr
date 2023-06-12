import { StyleSheet, Text, View, Image } from "react-native";

export default function PlayerCard({imageSource}) {
    return (
        <View>
            <Image
                source={imageSource}
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