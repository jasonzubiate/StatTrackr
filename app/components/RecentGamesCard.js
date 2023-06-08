import { StyleSheet, Text, View, Image } from "react-native";

export default function RecentGames() {
    return (
        <View style={styles.outline}>
            <View style={styles.heading}>
                <Text style={styles.title}>Recent Games</Text>
            </View>

            <View style={styles.scores}>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>FRI 5/12 VS </Text>

                    <Image
                        source={require('../assets/img/celticsimg.png')}
                        style={styles.image}
                    />
                    <Text style={styles.lost}>L</Text>
                    <Text style={styles.score}>125-121</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>PTS</Text>
                    <Text style={styles.score2}>41</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>AST</Text>
                    <Text style={styles.score2}>8</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>REB</Text>
                    <Text style={styles.score2}>9</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>STL</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>BLK</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>FG%</Text>
                    <Text style={styles.score2}>50</Text>
                </View>
            </View>

            <View style={styles.scores}>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>FRI 5/12 VS </Text>
                    <Image
                        source={require('../assets/img/goldenimg.png')}
                        style={styles.image}
                    />
                    <Text style={styles.win}>W</Text>
                    <Text style={styles.score}>119-110</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>PTS</Text>
                    <Text style={styles.score2}>41</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>AST</Text>
                    <Text style={styles.score2}>8</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>REB</Text>
                    <Text style={styles.score2}>9</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>STL</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>BLK</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>FG%</Text>
                    <Text style={styles.score2}>50</Text>
                </View>
            </View>

            <View style={styles.scores}>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>FRI 5/12 VS </Text>
                    <Image
                        source={require('../assets/img/team3.png')}
                        style={styles.image}
                    />
                    <Text style={styles.lost}>L</Text>
                    <Text style={styles.score}>98-121</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>PTS</Text>
                    <Text style={styles.score2}>41</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>AST</Text>
                    <Text style={styles.score2}>8</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>REB</Text>
                    <Text style={styles.score2}>9</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>STL</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>BLK</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>FG%</Text>
                    <Text style={styles.score2}>50</Text>
                </View>
            </View>

            <View style={styles.scores}>
                <View style={styles.scoreItem}>
                    <Text style={styles.abbreviation}>FRI 5/12 VS </Text>
                    <Image
                        source={require('../assets/img/team4.png')}
                        style={styles.image}
                    />
                    <Text style={styles.win}>W</Text>
                    <Text style={styles.score}>87-92</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>PTS</Text>
                    <Text style={styles.score2}>41</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>AST</Text>
                    <Text style={styles.score2}>8</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>REB</Text>
                    <Text style={styles.score2}>9</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>STL</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>BLK</Text>
                    <Text style={styles.score2}>0</Text>
                </View>
                <View style={styles.scoreAmount}>
                    <Text style={styles.abbreviation}>FG%</Text>
                    <Text style={styles.score2}>50</Text>
                </View>
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
        borderBottomWidth: 1,
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
    },

    scoreItem: {
        alignItems: "center",
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,

    },

    abbreviation: {
        color: "#A9A9A9",
        fontFamily: "sora-bold",
        fontSize: 10,
       
      },
    score: {
        color: "#3C43FF",
        fontFamily: "sora-regular",
        fontSize: 14,
        textDecorationLine: "underline",
        marginLeft: 7,
    },

    score2: {
        color: "white",
        fontFamily: "sora-regular",
        fontSize: 14,
    },

    win:{
        color: "green",
        fontSize: 14,
        fontFamily: "sora-regular",
        marginLeft: 3,
    },

    lost: {
        color: "red",
        fontSize: 14,
        fontFamily: "sora-regular",
        marginLeft: 3,
    },

    scoreAmount: {
        alignItems: "center",
        marginRight: 5,
        marginTop: 3,
    },

    image: {
        width: 30,
        height: 25,
        resizeMode: "contain",
        
    },

    outline: {
        borderWidth: 1,
        borderColor: "#FDB927",
    }
    
})
