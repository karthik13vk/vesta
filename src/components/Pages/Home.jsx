import React from 'react'
import { Banner } from "./../Banner/Banner";
import Marqueeslider from "./../Marquee/Marquee";
import TopSelling from "./../Topsellingproduct/TopSelling";
import Superfood from "./../Superfood/Superfood";
import Ads from "./../Ads/Ads";
import Testimonial from "./../Testimonial/Testimonial";
import Safe_Payment from "./../Safe_Payment/Safe_Payment";

const Home = () => {
    return (
        <>
            <Banner />
            <Marqueeslider />
            <TopSelling slidesToShow={6} />
            <Superfood />
            <TopSelling slidesToShow={4} />
            <Ads />
            <Testimonial />
            <Safe_Payment />
        </>
    )
}

export default Home