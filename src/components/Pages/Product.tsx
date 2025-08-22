import React from 'react'
import { Banner } from '../Banner/Banner';
import SellingProduct from "../SellingProduct/SellingProduct";
import Superfood from "../Superfood/Superfood";
import Videosection from "../Videosection/Videosection";
import Testimonial from "../Testimonial/Testimonial";

import Clientsslider from "../Clientsslider/Clientsslider";
import Faq from "../Faq/Faq";


const Product = () => {
    return (
        <>
            <Banner />
            <SellingProduct />
            <Superfood />
            <Videosection />
            <Testimonial />
            <Clientsslider />
            <Faq />
        </>
    )
}

export default Product