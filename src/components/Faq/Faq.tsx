import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from 'antd';


import insta from "../../assets/images/Instagram.png";
import instapic1 from "../../assets/images/flower-1.jpeg";
import instapic2 from "../../assets/images/flower-2.jpeg";
import instapic3 from "../../assets/images/flower-3.jpeg";
import instapic4 from "../../assets/images/flower-4.jpeg";
import instapic5 from "../../assets/images/flower-5.jpg";
import instapic6 from "../../assets/images/flower-6.jpg";
import instapic7 from "../../assets/images/flower-7.jpeg";
import "./Faq.scss";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const Faq: React.FC = () => {
  return (
    <div className="py-10 lg:py-20 faq-section">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-10 text-left title-section">
          <h5 className="pb-2 text-sm font-bold lg:text-md text-text_2 font-secondary">
            Faq
          </h5>
          <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
            Frequently Asked Questions
          </h4>
        </div>
        <div className="faq-inner">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <div className="lg:flex-1/2 flex-full faq-left">
              <Collapse accordion items={items} />
            </div>
            <div className="flex-1/2 faq-right">
              <div className="insta">
                <div className="flex flex-col items-center justify-between gap-5 mb-3 md:flex-row insta-top">
                  <div className="flex flex-row items-center w-full gap-1 md:basis-2/4">
                    <img src={insta} alt="img" />
                    <div>
                      <h4 className="text-lg font-semibold">Vista Herbals</h4>
                      <h6 className="text-sm">Vista Herbals</h6>
                    </div>
                  </div>
                  <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl md:basis-2/4 basis-4/4 p-2 px-3 border border-text_1 flex lg:items-center justify-center gap-1.5 hover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1">
                    Follow us on Instagram
                  </button>
                </div>
                <div className="insta-img md:columns-3 ">
                  <img className="w-[300]" src={instapic1} alt="img" />
                  <img className="w-[300]" src={instapic2} alt="img" />
                  <img className="w-[300]" src={instapic3} alt="img" />
                  <img className="w-[300]" src={instapic4} alt="img" />
                  <img className="w-[300]" src={instapic5} alt="img" />
                  <img className="w-[300]" src={instapic6} alt="img" />
                  <img className="w-[300]" src={instapic7} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
