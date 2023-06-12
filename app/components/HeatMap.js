import { StyleSheet, Text, View, Image } from "react-native";

export default function Heatmap({imageSource}) {
    return (
        <View style={styles.container}>
            <Image
                source={imageSource}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 370,
        height: 400,
        resizeMode: "contain",
        justifyContent: "center",
    }
  });