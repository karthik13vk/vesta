
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TopSelling.scss";
import { FaStar } from "react-icons/fa";
// import bannerImg from "./../../assets/images/homebanner.png";
import productimg1 from "./../../assets/images/products/product-img.png";
import { PiSealCheckFill } from "react-icons/pi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const products = [
  {
    id: 1,
    name: "Moringa Leaf Powder",
    image: productimg1,
    rating: 4.5,
    reviews: 100,
    price: 350,
    originalPrice: 400,
  },
  {
    id: 2,
    name: "Turmeric Capsules",
    image: productimg1,
    rating: 4.8,
    reviews: 85,
    price: 299,
    originalPrice: 349,
  },
  {
    id: 3,
    name: "Ashwagandha Powder",
    image: productimg1,
    rating: 4.3,
    reviews: 60,
    price: 320,
    originalPrice: 350,
  },
  {
    id: 4,
    name: "Turmeric Capsules",
    image: productimg1,
    rating: 4.8,
    reviews: 85,
    price: 299,
    originalPrice: 349,
  },
  {
    id: 5,
    name: "Ashwagandha Powder",
    image: productimg1,
    rating: 4.3,
    reviews: 60,
    price: 320,
    originalPrice: 350,
  },
  {
    id: 6,
    name: "Ashwagandha Powder",
    image: productimg1,
    rating: 4.3,
    reviews: 60,
    price: 320,
    originalPrice: 350,
  },
  {
    id: 7,
    name: "Turmeric Capsules",
    image: productimg1,
    rating: 4.8,
    reviews: 85,
    price: 499,
    originalPrice: 349,
  },
  {
    id: 8,
    name: "Ashwagandha Powder",
    image: productimg1,
    rating: 4.3,
    reviews: 60,
    price: 320,
    originalPrice: 350,
  },
];
const TopSelling = ({ slidesToShow = 6 }) => {
  return (
    <div className="py-10 lg:py-20 topselling-section ">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="mb-10 title-section">
          <h5 className="pb-2 text-sm font-bold text-left lg:text-md text-text_2">
            ONE TREE WONDOR
          </h5>
          <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
            Our Top Selling Products
          </h4>
        </div>
        <div className="topselling-inner">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={slidesToShow}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView:3 },
              1024: { slidesPerView: slidesToShow },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="h-full"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id || index} className="h-full">
                <div className="p-2 bg-white border rounded-lg topselling-cardinner border-text_5">
                  <div className="topselling-img">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="flex flex-col gap-3 topselling-content">
                    <h6 className="font-semibold min-h-15 text-md lg:text-lg text-text_1">
                      {product.name}
                    </h6>
                    <div className="flex flex-col gap-1 text-sm font-semibold text-text_3 lg:flex-row">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">
                          <FaStar />
                        </span>
                        {product.rating}/5
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="inline-block text-blue-500">
                          <PiSealCheckFill />
                        </span>
                        {product.reviews} Reviews
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-semibold text-text_1">
                        Rs.{product.price}
                      </div>
                      <div className="text-sm line-through text-text_3">
                        Rs.{product.originalPrice}
                      </div>
                    </div>
                    <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 text-lghover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1 hover:text-bg_4">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
