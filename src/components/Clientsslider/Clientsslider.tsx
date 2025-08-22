import React from "react";
import Marquee from "react-fast-marquee";
import clients1 from "./../../assets/images/clients1.png";
import clients2 from "./../../assets/images/clients2.png";
import clients3 from "./../../assets/images/clients3.png";

const MarqueeItems = [
  { type: "text", bold: clients1, text: "Free Delivery Across India" },
  { type: "text", bold: clients2, text: "Secure Payments" },
  { type: "text", bold: clients3, text: "Assured Quality" },
  { type: "text", bold: clients1, text: "Free Delivery Across India" },
  { type: "text", bold: clients2, text: "Secure Payments" },
  { type: "text", bold: clients3, text: "Assured Quality" },
  { type: "text", bold: clients3, text: "Assured Quality" },
  { type: "text", bold: clients1, text: "Free Delivery Across India" },
  { type: "text", bold: clients2, text: "Secure Payments" },
  { type: "text", bold: clients3, text: "Assured Quality" },
];
const Clientsslider = () => {
  return (
    <div className="py-2">
      <Marquee>
        <ul className="flex gap-3 mr-3 md:gap-8 md:mr-8">
          {MarqueeItems.map((item, index) => (
            <li
              key={index}
              className="flex gap-1.5 text-md items-center"
            >
              {item.type === "text" ? (
                <>
                <img src={item.bold} alt={item.text} /> 
                 <span className="font-semibold "> {item.text}</span>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default Clientsslider;
