import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Videosection.scss";
const products = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/embed/c_IAm1J1bao",
    videoTitle: "Moringa Leaf Powder Benefits",
  },
];
const Videosection = () => {
  return (
    <div>
      <div className="py-10 lg:py-20 video-section ">
        <div className="container px-4 mx-auto lg:px-6 ">
          <div className="mb-10 text-center title-section">
            <h5 className="pb-2 text-sm font-bold lg:text-md text-text_2 font-secondary">
              Videos
            </h5>
            <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
              Visual delight to Buy
            </h4>
          </div>

          <div className="video-inner">
            <Swiper
              modules={[A11y, Autoplay]}
              spaceBetween={6}
              slidesPerView={6}
              //   pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="h-full"
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.id || index} className="h-full">
                  <div className="p-2 bg-white border rounded-lg video-card border-text_5">
                    <div className="video-img">
                      <iframe
                        width="100%"
                        height="315"
                        src={`${product.videoUrl}?autoplay=0`}
                        title={product.videoTitle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
