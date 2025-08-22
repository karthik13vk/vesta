
import "./Testimonial.scss"
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "./../../assets/images/logo.png";
import { FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    id: 1,
    rating: 4.5,
    text: "I’ve been adding a teaspoon to my morning smoothie, and I feel so much more energetic! My digestion has improved, and I love that it’s 100% natural. Will definitely reorder.",
    author: "Priya R., Chennai",
  },
  {
    id: 2,
    rating: 5,
    text: "This product has completely changed my wellness routine. I feel refreshed and detoxed. Highly recommend to anyone interested in natural remedies.",
    author: "Amit S., Delhi",
  },
  {
    id: 3,
    rating: 4.8,
    text: "Really impressed with the quality. My skin is glowing and I feel more active throughout the day.",
    author: "Sneha M., Bangalore",
  },
  {
    id: 4,
    rating: 4.2,
    text: "Good product, fast delivery, and effective results. It's now part of my daily diet.",
    author: "Rajiv P., Mumbai",

  },
  {
    id: 5,
    rating: 5,
    text: "The best organic supplement I’ve tried. Completely satisfied with the performance.",
    author: "Meera K., Hyderabad",
  },
];
const Testimonial = ({ slidesToShow = 2 }) => {
  return (
    <div className="py-10 lg:py-20 testimonial-section bg-bg_2">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="mb-10 text-center title-section">
            <h5 className="pb-2 text-sm font-bold text-center lg:text-md text-text_2">
            TESTIMONIALS
          </h5>
          <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
            See, What our customer say about us
          </h4>
        </div>
        <div className="grid items-center grid-cols-3 gap-5 ">
          <div className="flex items-center justify-center col-span-3 lg:col-span-1 ">
            <div className="flex flex-col items-start gap-3 p-4 justify-self-start testimonial-left">
              <img src={logo} alt="img" />
              <ul className="flex items-center gap-2 text-yellow-500">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <h4 className="text-4xl font-semibold text-text_1">4.5/5</h4>
              <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 text-lghover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1 hover:text-bg_4">
                Review Us
              </button>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <div className="mb-5 testimonial-right">
            <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesToShow}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView:2 },
              1024: { slidesPerView: slidesToShow },
            }}
          className="h-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-full">
              <div className="flex flex-col h-full gap-3 p-5 bg-white border rounded-lg shadow testimonial-box border-text_7">
                <div className="testimonial-top">
                  <p className="flex items-center gap-2 font-semibold text-md text-text_3">
                    <span className="text-yellow-500">
                      <FaStar />
                    </span>
                    {testimonial.rating}/5
                  </p>
                </div>
                <div className="testimonial-middle">
                  <p className="font-medium text-text_1">“{testimonial.text}”</p>
                </div>
                <div className="mt-auto testimonial-bottom">
                  <h6 className="font-semibold text-text_1">{testimonial.author}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
