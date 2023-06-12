import { StyleSheet, Text, View, Image } from "react-native";

export default function Chart({imageSource}) {
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
        width: 360,
        height: 218,
        resizeMode: "contain",
        justifyContent: "center",
    }
  });