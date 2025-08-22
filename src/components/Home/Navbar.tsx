import React, { useState, useRef } from "react";
import logo from "./../../assets/images/logo.png";
import products from "./../../assets/images/products/product-img.png";
import saving from "./../../assets/images/saving.png";
import { BsCart4 } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { Layout, Menu } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import "./Navbar.scss";
import { Button, ConfigProvider, Drawer, Space } from "antd";
import { createStyles, useTheme } from "antd-style";
import type {
  DrawerClassNames,
  DrawerStyles,
} from "antd/es/drawer/DrawerPanel";
import { AiFillMinusCircle, AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

import "swiper/css/navigation";
import { Link } from "react-router-dom";
// import required modules

const { Header, Content } = Layout;

// ✅ Define styles using `createStyles`
const useStyle = createStyles(({ token }) => ({
  "my-drawer-body": {
    background: token.blue1,
  },
  "my-drawer-mask": {
    boxShadow: "inset 0 0 15px #fff",
  },
  "my-drawer-header": {
    background: token.green1,
  },
  "my-drawer-footer": {
    color: token.colorPrimary,
  },
  "my-drawer-content": {
    borderLeft: "1px silid #fff",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState([false, false]);

  const { styles } = useStyle();
  const token = useTheme();

  // ✅ Drawer toggle function
  const toggleDrawer = (index: number, status: boolean) => {
    const updated = [...open];
    updated[index] = status;
    setOpen(updated);
  };

  // ✅ Custom classNames for Drawer
  const classNames: DrawerClassNames = {
    body: styles["my-drawer-body"],
    mask: styles["my-drawer-mask"],
    header: styles["my-drawer-header"],
    footer: styles["my-drawer-footer"],
    content: styles["my-drawer-content"],
  };
  const drawerStyles: DrawerStyles = {
    mask: {
      backdropFilter: "blur(10px)",
    },
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    header: {
      borderBottom: `1px solid ${token.colorPrimary}`,
    },
    body: {
      fontSize: token.fontSizeLG,
    },
    footer: {
      borderTop: `1px solid ${token.colorBorder}`,
    },
  };

  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="nav-section">
      <div className="flex justify-center py-2 font-bold align-middle bg-bg_4 text-1xl text-text_1">
        Free Delivery Across India
      </div>
      <Layout>
        <div className="py-3 text-5xl bg-bg_2 text-text_3 font-primary">
          <div className="container flex flex-row items-center justify-between px-4 mx-auto lg:px-6 ">
            <div className="hidden basis-5/12 lg:block">
              <div className="header-main">
                <div className="header-left">
                  <ul className="flex justify-between gap-2 align-middle lg:gap-2 xl:gap-3 menulink">
                    <li className="flex items-center">
                      <Link
                        href=""
                        to="/"
                        className="text-sm text-text_1 md:text-md xl:text-lg "
                      >
                        Home
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link
                        href=""
                        to="/product"
                        className="text-sm text-text_1 md:text-md xl:text-lg "
                      >
                        All Products
                      </Link>
                    </li>

                    <li className="flex items-center">
                      <Link
                        href=""
                        to="/productsingle"
                        className="text-sm text-text_1 md:text-md xl:text-lg "
                      >
                        Kitchen Essential
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <a
                        href=""
                        className="text-sm text-text_1 md:text-md xl:text-lg "
                      >
                        Nutrition Essential
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="basis-2/12">
              <div className="flex items-center justify-center main-logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="basis-5/12">
              <div className="flex items-center justify-between gap-3 header-right md:gap-0">
                <div className="hidden gap-3 text-text_1 lg:flex">
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-text_1 md:text-md xl:text-lg font-primary"
                  >
                    Personal Care
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-sm text-text_1 md:text-md xl:text-lg font-primary"
                  >
                    Blog
                  </a>
                </div>

                <div className="relative h-[40px]  items-center flex ">
                  <input
                    type="text"
                    className="py-1 px-3 text-lg bg-inputcolor rounded-full w-[100px] lg:w-[120px] focus:outline-text_2 hidden lg:flex active:bg-text_2 "
                  />
                  <SearchOutlined className="text-lg lg:absolute top-3 right-2 text-text_1 " />
                </div>
                <div className="flex gap-2">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center text-lg text-text_1 "
                  >
                    <UserOutlined />
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center text-lg text-text_1 lg:hidden"
                  >
                    <BsCart4 />
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => setIsCartOpen(true)}
                    className="tetransition-all duration-300  bg-text_2 text-white rounded-md p-2 border border-text_2 flex items-center justify-center gap-1.5 text-lg        hover:text-text_1 hover:bg-white hover:border hover:border-text_2 hidden lg:flex cursor-pointer"
                  >
                    <BsCart4 />
                    Cart (1)
                  </a>
                  <a
                    href="javascript:void(0)"
                    onClick={() => setIsMenuOpen(true)}
                    className="  text-text_2 rounded-md p-2 flex items-center justify-center gap-1.5  text-4xl  flex lg:hidden"
                  >
                    <CgMenuRight />
                  </a>
                </div>
              </div>
              <div>
                <Drawer
                  title={
                    <div className="flex items-center gap-2">
                      <img src={logo} alt="logo" className="h-8" />
                    </div>
                  }
                  width={250}
                  closable={false}
                  onClose={() => setIsMenuOpen(false)}
                  open={isMenuOpen}
                >
                  <div className="header-left">
                    <ul className="flex flex-col justify-between gap-4 align-middle menulink">
                      <li className="flex items-center">
                        <Link
                          href=""
                          to="/"
                          className="text-sm text-text_1 md:text-md xl:text-lg "
                        >
                          Home
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <Link
                          href=""
                          to="/product"
                          className="text-sm text-text_1 md:text-md xl:text-lg "
                        >
                          All Products
                        </Link>
                      </li>

                      <li className="flex items-center">
                        <Link
                          href=""
                          to="/productsingle"
                          className="text-sm text-text_1 md:text-md xl:text-lg "
                        >
                          Kitchen Essential
                        </Link>
                      </li>
                      <li className="flex items-center">
                        <a
                          href=""
                          className="text-sm text-text_1 md:text-md xl:text-lg "
                        >
                          Nutrition Essential
                        </a>
                      </li>
                      <li className="flex items-center">
                        <a
                          href="javascript:void(0)"
                          className="text-sm text-text_1 md:text-md xl:text-lg font-primary"
                        >
                          Personal Care
                        </a>
                      </li>
                      <li className="flex items-center">
                        <a
                          href="javascript:void(0)"
                          className="text-sm text-text_1 md:text-md xl:text-lg font-primary"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          title="Free Delivery On All Orders"
          placement="right"
          onClose={() => setIsCartOpen(false)}
          open={isCartOpen}
          classNames={classNames}
          styles={drawerStyles}
        >
          <div className="flex gap-2 pb-3 mb-3 border-b justify-items-start border-b-text_10">
            <div className="w-[30%] p-4 bg-bg_8 rounded-xl">
              <img src={products} alt="img" className="" />
            </div>
            <div className="flex justify-between flex-auto">
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-md text-text_1">
                  Moringa Leaf powder
                </h3>
                <h2 className="text-xl font-regular text-text_9">
                  Rs.345
                  <span className="text-sm line-through text-text_8">
                    Rs.545
                  </span>
                </h2>
                <div className="flex items-center gap-3 px-5 py-2 font-bold rounded bg-inputcolor w-fit">
                  <button type="button" onClick={handleDecrement}>
                    <AiOutlineMinus />
                  </button>
                  <span className="button">{count}</span>
                  <button type="button" onClick={handleIncrement}>
                    <IoMdAdd />
                  </button>
                </div>
              </div>
              <div>
                <AiFillMinusCircle className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="productslider">
            <div className="relative flex items-center justify-between mb-2">
              <h5>Related Products</h5>
              <div className="flex gap-2">
                <div
                  ref={prevRef}
                  className="px-2 py-1 bg-gray-300 rounded cursor-pointer"
                >
                  ←
                </div>
                <div
                  ref={nextRef}
                  className="px-2 py-1 bg-gray-300 rounded cursor-pointer"
                >
                  →
                </div>
              </div>
            </div>

            <Swiper
              slidesPerView={2}
              spaceBetween={5}
              pagination={{ clickable: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              onBeforeInit={(swiper) => {
                // Attach custom buttons
                if (typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              navigation={{}} // Required to enable navigation module
              modules={[Navigation]}
              className="sideSwiper"
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center gap-3 p-2 mb-3 bg-white border rounded-md card-slider-box border-bg_9">
                    <img src={products} alt="img" className="w-1/2" />
                    <h6 className="font-semibold text-md text-text-1">
                      AB2C Milk Mix 250g
                    </h6>
                    <div className="flex flex-row justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-text-1">
                          Rs.345
                        </h4>
                        <h6 className="text-xs font-normal line-through text-text-8">
                          Rs.545
                        </h6>
                      </div>
                      <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 text-lghover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1 hover:text-bg_4">
                        <IoMdAdd /> Add
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-4 py-5 rounded-md coupon-box bg-bg_10">
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between text-black font-regular text-md">
                    <div>Subtotal</div>
                    <div>Rs.500</div>
                  </li>
                  <li className="flex justify-between text-black font-regular text-md">
                    <div>Discount</div>
                    <div className="px-2 text-white rounded-md bg-bg_1">
                      Apply Coupon
                    </div>
                  </li>
                  <li className="flex justify-between text-black font-regular text-md">
                    <div>Total</div>
                    <div>Rs.500</div>
                  </li>
                </ul>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <img src={saving} alt="img" /> You Saved Rs.200 with this
                  order
                </div>

                <button className="transition-all duration-300 bg-bg_4 text-text_1 rounded-3xl mt-2 w-full p-2 px-3 border border-text_1 flex items-center justify-center gap-1.5 text-lghover:text-bg_4 hover:bg-text_1 hover:border hover:border-text_1 hover:text-bg_4">
                  Check out Now
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      </Layout>
    </div>
  );
};

export default Navbar;
