import React from "react";
import {IMovie} from "@/types";
import {Dimensions, Image, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {image185} from "@/lip/api";
import {usePathname, useRouter} from "expo-router";

interface Props {
    item: IMovie;
}

const {width, height} = Dimensions.get("window");

// Utility function to construct the URL with explicit type casting
function getMovieUrl(id: number, isTv: boolean): string {
    return `/movie/${id}?type=${isTv ? "tv" : "false"}`;
}

export default function MovieCard({item}: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const isTv = pathname === "/tv";

    return (
        <TouchableWithoutFeedback
            onPress={() => router.push(getMovieUrl(item.id, isTv) as any)}
        >
            <Image
                source={{uri: `${image185(item?.poster_path)}`}}
                style={styles.image}
            />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        width: width * 0.3,
        height: height * 0.2,
    },
});
