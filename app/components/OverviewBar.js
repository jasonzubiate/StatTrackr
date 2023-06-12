import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OverviewBar({navigation}) {
    

    return(
        <View style={styles.heading}>
            <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
                <Text style={styles.title}>Overview</Text>
            </TouchableOpacity>
            <Text style={styles.title}>GameLog</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AdvancedStats")}>
                <Text style={styles.title}>Advanced Stats</Text>
            </TouchableOpacity>
            
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
    underline: {
        textDecorationLine: "underline",
    }

})
