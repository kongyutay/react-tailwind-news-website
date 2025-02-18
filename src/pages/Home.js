import React from "react";
import Trending from "../components/Trending";
import TrendingGrid from "../components/TrendingGrid";
import PopularPost from "../components/PopularPost";
import News from "../components/News";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
    return (
        <>
            <Trending />
            <TrendingGrid />
            <PopularPost />
            <News />
            <NewsLetter />
        </>
    )
}

export default Home