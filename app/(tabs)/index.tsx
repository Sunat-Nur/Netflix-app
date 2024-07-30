import {View, Text} from '@/components/Themed';
import 'nativewind';
import {useEffect, useState} from "react";
import {IMovie} from "@/types";
import {popularMovies, topRatedMovies, trendingMovies} from "@/lip/api";
import Banner from "@/components/shared/banner";


export default function Index() {
    const [trending, setTrending] = useState<IMovie[]>([]);
    const [topRated, setTopRated] = useState<IMovie[]>([]);
    const [popular, setPopular] = useState<IMovie[]>([]);

    useEffect(() => {
        getTrendingMovies();
        getTopRated();
        getPopular();
    }, []);


    const getTrendingMovies = async () => {
        const trending = await trendingMovies();
        setTrending(trending);
    }

    const getTopRated = async () => {
        const topRated = await topRatedMovies();
        setTopRated(topRated);
    }

    const getPopular = async () => {
        const popular = await popularMovies();
        setPopular(popular);
    }

    return (
        <View className="flex-1">
            <Banner movies={popular}/>
        </View>
    );
}
