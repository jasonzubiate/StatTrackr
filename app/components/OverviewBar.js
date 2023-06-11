import { StyleSheet, Text, View, Image } from "react-native";

export default function OverviewBar() {


    return(
        <View style={styles.heading}>
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.title}>GameLog</Text>
            <Text style={styles.title}>Advanced Stats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2B2929",
        borderWidth: 1,
        borderColor: "white",
        padding: 5,
        

    },

    title: {
        color: "white",
        fontFamily: "sora-bold",
        fontSize: 16,
        letterSpacing: 1,
        marginHorizontal: 5,
        
    },

})