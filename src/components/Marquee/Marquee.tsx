import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeItems = [
  { type: "text", bold: "25k+", text: "Customers Satisfied" },
  { type: "text", bold: "100k+", text: "Product Sold" },
  { type: "text", bold: "100%", text: "Natural & Organic" },
  { type: "text", bold: "120+", text: "Nutritional Serving" },
  { type: "text", bold: "150+", text: "Empowering Farmers" },
   { type: "text", bold: "100%", text: "Natural & Organic" },
];
const Marqueeslider = () => {
  return (
    <div className="py-2 marquee-section bg-bg_5 ">
      <div className="container flex flex-row items-center px-4 mx-auto lg:px-6 ">
        <Marquee>
          <ul className="flex gap-3 mr-3 md:gap-8 md:mr-8">
            {MarqueeItems.map((item, index) => (
              <li
                key={index}
                className="flex gap-1.5 text-white text-lg items-center"
              >
                {item.type === "text" ? (
                  <>
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default Marqueeslider;
