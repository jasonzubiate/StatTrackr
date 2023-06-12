import { StyleSheet, Text, View } from "react-native";

export default function Season( {scores} ) {
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.title}>2022-23 Season</Text>

            </View>
        
            <View style={styles.scores}>
                {scores.map((score, index) => {
                    return (
                        <View style={styles.scoreItem} key={index}>
                            <Text style={styles.abbreviation}>{score.label}</Text>
                            <Text style={styles.score}>{score.value}</Text>

                        </View>
                    )
                })}
                {/* <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>PPG</Text>
                    <Text style={styles.score}>28.9</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>APG</Text>
                    <Text style={styles.score}>6.8</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>RPG</Text>
                    <Text style={styles.score}>8.3</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>SPG</Text>
                    <Text style={styles.score}>0.9</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>BPG</Text>
                    <Text style={styles.score}>0.6</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>FG%</Text>
                    <Text style={styles.score}>50</Text>
                </View> */}
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
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

    scores: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#2B2929",
        borderWidth: 1,
        borderColor: "#FDB927",
    },

    scoreItem: {
        alignItems: "center",
        marginHorizontal: 15,

    },

    abbreviation: {
        color: "#A9A9A9",
        fontFamily: "sora-bold",
        fontSize: 12,
      },
    score: {
        color: "white",
        fontFamily: "sora-regular",
        fontSize: 14,
    },
    
})