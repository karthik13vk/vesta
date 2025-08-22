import React from "react";
import foodimg from "./../../assets/images/superfood-img.png";
import orangeimg from "./../../assets/images/orange.png";
import leaveimg from "./../../assets/images/leave.png";
 import bgfood from "./../../assets/images/bg-food-img.png";

const Superfood = () => {
  return (
    <div className="relative py-10 mx-auto lg:py-20 superfood-section bg-bg_3">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="items-center justify-center gap-5 lg:flex flex-1/2">
          <div className="mb-5 superfood-img lg:mb-0">
            <img src={foodimg} alt="img" className="w-full rounded-2xl" />
          </div>
          <div className="text-center superfood-details">
            <div className="mb-10 title-section">
              <h1 className="text-2xl font-bold lg:text-3xl text-primary ">
                “Miracle Tree”
                <span className="italic font-light text-text_6 font-secondary">
                  What they called Moringa
                </span>
              </h1>
              <h6 className="text-2xl font-semibold lg:text-3xl text-text_1">
                Nutrient-Dense Superfood
              </h6>
            </div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-3 superfood-grid">
              <div className="flex flex-col items-center justify-center gap-3 p-3 text-white bg-primary">
                <h5 className="flex gap-2 text-4xl font-semibold lg:text-5xl">19%</h5>
                <h6 className="font-normal text:md lg:text-xl">
                  satisfied your <br /> Daily Vitamin B6
                </h6>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-3 text-white bg-primary">
                <h5 className="flex gap-2 text-4xl font-semibold lg:text-5xl">12%</h5>
                <h6 className="font-normal text:md lg:text-xl">
                    satisfied your<br /> Daily Vitamin C
                </h6>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-3 text-white bg-primary">
                <h5 className="flex gap-2 text-4xl font-semibold lg:text-5xl">11%</h5>
                <h6 className="font-normal text:md lg:text-xl">
                    satisfied your <br />  Daily Iron
                </h6>
              </div>
              <div className="flex flex-col justify-center gap-4 md:flex-row md:col-span-3">
                <div className="flex flex-col items-center justify-center gap-3 p-3 text-white bg-primary">
                  <h5 className="flex gap-2 text-4xl font-semibold lg:text-5xl"><img src={orangeimg} alt="img" /> 7x</h5>
                  <h6 className="font-normal text:md lg:text-xl">
                    More Vitamin C  <br /> than Oranges
                   
                  </h6>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-3 text-white bg-primary">
                  <h5 className="flex gap-2 text-4xl font-semibold lg:text-5xl"><img src={leaveimg} alt="img" /> 22%</h5>
                  <h6 className="font-normal text:md lg:text-xl">
                     More Iron  <br />than Spinach
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="absolute top-0 -z-2 right-2">
        <img src={bgfood} alt="img" />
      </div>
    </div>
  );
};

export default Superfood;
