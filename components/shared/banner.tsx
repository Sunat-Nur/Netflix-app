import {Text, View} from "@/components/Themed";
import {IMovie} from "@/types";
import {useEffect, useState} from "react";
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity,} from "react-native";

interface Props {
    movies: IMovie[];
}

export default function Banner({movies}: Props) {
    const [randomMovie, setRandomMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        setRandomMovie(movie);
    }, [movies]);


    return (
        <View className="flex-1">
            <Text>Banner</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundWrapper: {
        width: "100%",
        height: (Dimensions.get("window").height * 81) / 100,
        position: "relative",
        zIndex: -1,
    },
    infoWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: Dimensions.get("window").height / 3,
    },
    infoContainer: {
        paddingTop: 25,
        gap: 20,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "transparent",
    },
    tabWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        backgroundColor: "transparent",
    },
    tabBtn: {
        alignItems: "center",
    },
    tabText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    menu: {
        width: "100%",
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
    },
    menuBtn: {
        alignItems: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 13,
        marginTop: 3,
    },
    playBtn: {
        flexDirection: "row",
        backgroundColor: "white",
        width: 142,
        height: 32,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonPlay: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 4,
    },
});