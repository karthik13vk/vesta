import React from "react";
import prodcimg from "./../../assets/images/selling-img.png";
import productimg1 from "./../../assets/images/products/product-img.png";
import productimg2 from "./../../assets/images/productimg2.png";
import productimg3 from "./../../assets/images/productimg3.png";
import productimg4 from "./../../assets/images/productimg4.png";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
const productRows = [
  {
    heading: "For Essential Nutrition",
    image: prodcimg,
    products: [
      {
        id: 1,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
      {
        id: 2,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
    ],
  },
  {
    heading: "For Essential Nutrition",
    image: productimg2,
    products: [
      {
        id: 1,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
      {
        id: 2,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
    ],
  },
  {
    heading: "For Essential Nutrition",
    image: productimg3,
    products: [
      {
        id: 1,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
      {
        id: 2,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
    ],
  },
  {
    heading: "For Essential Nutrition",
    image: productimg4,
    products: [
      {
        id: 1,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
      {
        id: 2,
        name: "Moringa Leaf Powder",
        image: productimg1,
        rating: "4.5/5",
        reviews: "100 Reviews",
        price: "Rs.350",
        originalPrice: "Rs.350",
      },
    ],
  },
];

const SellingProduct = () => {
  return (
    <div>
      <div className="py-10 lg:py-20 selling-product ">
        <div className="container px-4 mx-auto lg:px-6 ">
          <div className="mb-10 text-center title-section">
            <h5 className="pb-2 text-sm font-bold lg:text-md text-text_2 font-secondary">
              One Tree Wondor
            </h5>
            <h4 className="text-2xl font-semibold lg:text-4xl text-text_1">
              Our Top Selling Products
            </h4>
          </div>
          <div className="selling-inner">
            {productRows.map((row, rowIndex) => (
              <div
                className="grid gap-3 mb-5 lg:gap-5 lg:grid-cols-7"
                key={rowIndex}
              >
                {/* Left Block */}
                <div className="lg:col-span-4 col-span-7 lg:w-[80%] w-full">
                  <div className="relative p-5 pb-0 rounded-4xl selling-boxleft bg-bg_3">
                    <h5 className="text-4xl font-semibold text-bg_5">
                      {row.heading.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i !== row.heading.split(" ").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h5>
                    <img src={row.image} alt="banner" className="ml-auto" />
                  </div>
                </div>

                {/* Product Cards */}

                <div className="lg:col-span-3 col-span-7 lg:w-[100%] w-full">
                  <div className="flex gap-1">
                    {row.products.map((product) => (
                      <div
                        className="p-2 border rounded-lg topselling-cardinner border-text_5 md:w-full"
                        key={product.id}
                      >
                        <div className="flex justify-center mb-4 text-center bg-white topselling-img">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="flex flex-col gap-3 topselling-content">
                          <h6 className="font-semibold min-h-15 text-md lg:text-lg text-text_1">
                            {product.name}
                          </h6>
                          <div className="flex flex-row gap-1 text-sm font-semibold text-text_3 lg:flex-row">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">
                                <FaStar />
                              </span>
                              {product.rating}
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="inline-block text-blue-500">
                                <PiSealCheckFill />
                              </span>
                              {product.reviews}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="text-lg font-semibold text-text_1">
                              {product.price}
                            </div>
                            <div className="text-sm line-through text-text_3">
                              {product.originalPrice}
                            </div>
                          </div>
                          <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 hover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProduct;
