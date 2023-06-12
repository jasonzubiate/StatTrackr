import { StyleSheet, Text, View, Image } from "react-native";

export default function ODPstats({imageSource}) {
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
        width: 200,
        height: 200,
        resizeMode: "contain",
        justifyContent: "center",
    }
  });