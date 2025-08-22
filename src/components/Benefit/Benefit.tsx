import React from "react";
import benefit from "./../../assets/images/benefit.png";
import "./Benefit.scss";

const Benefit = () => {
  return (
    <div className="py-10 lg:py-20 benefit-section ">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="flex flex-col-reverse gap-3 lg:flex-row lg:gap-5">
          <div className=" flex-1/2 left-benefit">
            <div className="benefit-img">
              <img src={benefit} alt="img" />
            </div>
          </div>
          <div className="flex-1/2 right-benefit">
            <div className="mb-10 title-section">
              <h1 className="text-2xl font-bold lg:text-3xl text-primary ">
                <span className="italic font-light text-text_6 font-secondary">
                  Benefits
                </span>
              </h1>
              <h6 className="text-2xl font-semibold lg:text-3xl text-text_1">
                Benefits of Moringa Powder
              </h6>
            </div>
            <div className="benefit-inner-details">
              <div className="flex gap-2 mb-2 banner-inner">
                <div className="text-2xl font-semibold text-text_2 mb-1.5">
                  1.
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-text_2 mb-1.5">
                    Boosts Immunity
                  </h5>
                  <p>
                    Rich in vitamins & antioxidants that strenghten your body's
                    defences and speed up recovery
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

export default Benefit;
