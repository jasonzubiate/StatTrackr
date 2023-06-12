import { StyleSheet, Text, View, Image } from "react-native";

export default function PreviousGame({scores}) {
    return (
        <View>
            <View style={styles.heading}>
                <Text style={styles.title}>Previous Game</Text>

            </View>
            {/* this is for the images and scores on the side of them */}
            <View style={styles.previous}>
                <View style={styles.teamContainer}>
                    <View style={styles.teamName}>
                        <Image
                            source={require('../assets/img/lakerimage.png')}
                            style={styles.teamImage}
                        />
                        <Text style={styles.teamName}>LAL</Text>
                        <Text style={styles.teamName}>42-39</Text>
                    </View>
                    <Text style={styles.teamScore}>121</Text>
                </View>
                

                <Text style={styles.gameDate}>FRI 5/12</Text>

                {/* this is the image for boston celtics */}
                <View style={styles.teamContainer}>
                    <Text style={styles.teamScore}>125</Text>
                    <View style={styles.teamName}>
                        <Image
                            source={require('../assets/img/celticsimg.png')}
                            style={styles.teamImage}
                        />
                        <Text style={styles.teamName}>BOS</Text>
                        <Text style={styles.teamName}>42-39</Text>
                    </View>
                </View>


            </View>
                {/* this is for the scores at the bottom */}
                <View style={styles.scores}>
                {scores.map((score, index) => {
                    return (
                        <View style={styles.scoreItem} key={index}>
                            <Text style={styles.abbreviation}>{score.label}</Text>
                            <Text style={styles.score}>{score.value}</Text>

                        </View>
                    )
                })}
                </View>

        </View>
        

    )
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

    previous: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#2B2929",
        
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#FDB927",
    },

    teamContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    teamImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        marginRight: 8,
        marginLeft: 8,
    },

    teamScore: {
        color: "white",
        fontSize: 18,
        margin: 10,
    
    },

    gameDate: {
        color: "white",
        fontSize: 10,
        marginHorizontal: 1,
        marginTop: 40,
        
    },

    teamName: {
        flexDirection: "column",
        color: "#3C43FF",
        alignItems: "center",
        textDecorationLine: "underline",
    },

    scores: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#2B2929",
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#FDB927",
    },
    scoreItem: {
        alignItems: "center",
        marginHorizontal: 18,
        paddingTop: 10,

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

  });
  