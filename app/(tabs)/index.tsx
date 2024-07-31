import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { popularMovies, topRatedMovies, trendingMovies } from "@/lip/api";
import { IMovie } from "@/types";
import Banner from "../../components/shared/banner";
import { ScrollView, StyleSheet } from "react-native";
import MovieCard from "@/components/card/movie-card";
import Loader from "../../components/shared/loader";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/context";

export default function Index() {
    const [trending, setTrending] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [popular, setPopular] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user, account } = useGlobalContext();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [trending, topRated, popular] = await Promise.all([
                trendingMovies(),
                topRatedMovies(),
                popularMovies(),
            ]);
            setTrending(trending);
            setTopRated(topRated);
            setPopular(popular);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader />;
    if (user === null) return <Redirect href={"/auth"} />;
    if (account === null) return <Redirect href={"/account"} />;

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Banner movies={trending} />

                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>Trending Movies</Text>
                        <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
                            {trending.map((item) => (
                                <MovieCard item={item} key={item.id} />
                            ))}
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.title}>Top Rated Movies</Text>
                        <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
                            {topRated.map((item) => (
                                <MovieCard item={item} key={item.id} />
                            ))}
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.title}>Popular Movies</Text>
                        <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
                            {popular.map((item) => (
                                <MovieCard item={item} key={item.id} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "column",
        rowGap: 50,
        marginTop: 50,
    },
    title: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 10,
    },
});
