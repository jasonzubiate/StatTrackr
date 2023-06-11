import { startTransition } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function OverviewStats(){
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Stats</Text>
            </View>
            {/* can make it to where i have a column of the names on the left then create a column that has rows with each stat */}
            <View style={styles.statsRow}>
                <Text style={styles.stat}>Stat</Text>
                <Text style={styles.abbreviation}>GP</Text>
                <Text style={styles.abbreviation}>GS</Text>
                <Text style={styles.abbreviation}>MIN</Text>
                <Text style={styles.abbreviation}>3PT</Text>
                <Text style={styles.abbreviation}>FT</Text>
                <Text style={styles.abbreviation}>OR</Text>
                <Text style={styles.abbreviation}>PF</Text>
                <Text style={styles.abbreviation}>DR</Text>
                <Text style={styles.abbreviation}>TO</Text>
            </View>

            

            <View style={styles.statsRow}>
                <Text style={styles.stat}>Regular Season</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
            </View>

            <View style={styles.statsRow}>
                <Text style={styles.stat}>Post Season</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
            </View>

            <View style={styles.statsRow}>
                <Text style={styles.stat}>Career</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
                <Text style={styles.abbreviation}>0.0</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2B2929",
        borderWidth: 1,
        borderColor: "#FDB927",
      },

    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#552583",
        borderWidth: 1,
        borderColor: "#FDB927",
        

    },

    title: {
        color: "white",
        fontFamily: "sora-bold",
        fontSize: 16,
        letterSpacing: 1,
    },

    statsRow: {
        flexDirection: "row",
        alignItems: "center",
        
      },
      abbreviation: {
        flex: 1,
        color: "white",
        fontFamily: "sora-bold",
        fontSize: 8,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        
        
      },
      stat: {
        flex: 2,
        color: "white",
        fontFamily: "sora-regular",
        fontSize: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
        marginBottom: 5,
        
      },

});