import { useState } from "react";
import { Breadcrumb, Button } from "antd";
import producticon1 from "./../../assets/images/product-icon1.png";
import producticon2 from "./../../assets/images/product-icon2.png";
import producticon3 from "./../../assets/images/product-icon3.png";
import producticon4 from "./../../assets/images/product-icon4.png";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import required modules
import { Swiper as SwiperType } from 'swiper'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import { PiSealCheckFill } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/thumbs";

const Product_Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const features = [
    {
      icon: producticon1,
      text: "It is a complete protein (all essential amino acids)",
    },
    {
      icon: producticon2,
      text: "Rich in Antioxidants & Vitamins",
    },
    {
      icon: producticon3,
      text: "Boosts Immunity & Aids Recovery",
    },
    {
      icon: producticon4,
      text: "100% Pure & Preservative-Free",
    },
  ];

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];
  return (
    <div className="py-10 lg:py-20 productdetails-section ">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="mb-2 breadcrumb-section">
          <Breadcrumb>
            <Breadcrumb.Item>Home </Breadcrumb.Item>
            <Breadcrumb.Item>Moringa Powder</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5 productdetails-inner">
          <div className="overflow-hidden productdetails-img flex-1/2">
<Swiper
  style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  } as React.CSSProperties}
  spaceBetween={10}
  navigation={true}
  thumbs={{ swiper: thumbsSwiper }}
  modules={[FreeMode, Navigation, Thumbs]}
  className="mySwiper2"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <InnerImageZoom
        src={img}
        zoomSrc={img}
        zoomType="hover"
        zoomPreload={true}
        alt={`Slide ${index + 1}`}
      />
    </SwiperSlide>
  ))}
</Swiper>

<Swiper
  onSwiper={setThumbsSwiper}
  spaceBetween={10}
  slidesPerView={4}
  freeMode={true}
  watchSlidesProgress={true}
  modules={[FreeMode, Navigation, Thumbs]}
  className="mySwiper"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={`Thumbnail ${index + 1}`} />
    </SwiperSlide>
  ))}
</Swiper>
          </div>
          <div className="productinfo flex-1/2">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-4 productinfodetails">
                <div>
                  <span className="inline-block text-yellow-500">
                    <FaStar />
                  </span>
                  4/5
                  <span className="inline-block text-blue-500">
                    <PiSealCheckFill />
                  </span>
                  100 Reviews
                </div>
                <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
                  Moringa Leaf Powder
                </h4>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold text-text_1">
                    Rs.500
                  </div>
                  <div className="text-sm line-through text-text_3">Rs.750</div>
                  <div className="px-1.5 py-1 text-sm text-white bg-text_2 rounded-lg">
                    Free Delivery
                  </div>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-between lg:gap-2 lg:flex-nowrap">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-1/2 p-2 text-center lg:w-full lg:gap-2 justify-evenly lg:p-0 "
                    >
                      <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-bg_3">
                        <img src={item.icon} alt="img" />
                      </div>
                      <h2 className="h-[80px] text-md">{item.text}</h2>
                    </div>
                  ))}
                </div>
                <div className="checkbox-area ">
                  <h6 className="mb-1 text-text_11">Check Availablity</h6>
                  <div className="relative flex items-center gap-2 lg:justify-center">
                    <input
                      type="text"
                      className="w-1/2 px-3 py-1 text-lg border rounded-none lg:w-3/4 bg-inputcolor focus:outline-text_2 focus:rounded-none lg:flex border-text_11 active:bg-text_2"
                    />
                    <Button className="flex py-1.5 text-lg text-black border-0 rounded-none bg-bg_11 text-md">
                      Check
                    </Button>
                  </div>
                </div>
                <div className=" quality-part">
                  <h5 className="mb-5">
                    Net Quantity{" "}
                    <span className="px-1.5 py-1 text-white rounded-md bg-text_2">
                      100g
                    </span>
                  </h5>

                  <div className="flex items-center gap-3 lg:justify-center ">
                    <div className="flex items-center gap-3 px-5 py-2 font-bold border border-black rounded-none bg-inputcolor w-fit">
                      <button type="button" onClick={handleDecrement}>
                        <AiOutlineMinus />
                      </button>
                      <span className="button">{count}</span>
                      <button type="button" onClick={handleIncrement}>
                        <IoMdAdd />
                      </button>
                    </div>
                    <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl lg:w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 text-lghover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1 hover:text-bg_4">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-content">
                  <h4 className="mb-2 text-2xl font-semibold">
                    Product Description
                  </h4>
                  <p>
                    Packed with essential vitamins, minerals, and antioxidants,
                    our Moringa pods powder enhances your daily wellness
                    routine. Rich in fibre, protein, Vitamin C, various B
                    vitamins, and antioxidants, it boosts immunity and supports
                    digestive health with its high fibre content.
                  </p>
                  <p>
                    Magnesium and Potassium from Moringa pods benefit heart
                    health and blood pressure management. Its mild, fresh flavor
                    complements homemade curries, stews, sambhar, and baking
                    recipes, adding nutritional value to your meals and snacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
