import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import { IoBagOutline, IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiSearchLine, RiHeart3Line } from "react-icons/ri";
import { CgSmileMouthOpen } from "react-icons/cg";

// import NavCSS from "../assets/styles/Navigation.module.css";
import MenuMobile from "./MenuMobile";
import { CartContext } from "../contexts/CartContext";

const Navigation = () => {
  const [show, setShow] = useState("translate-y-0");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cart, wishlist } = useContext(CartContext);
  const cartLength = cart.length;
  const wishlistLength = wishlist.length;

  const controlNavbar = () => {
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* <NavLink to="/home" >Home</NavLink> || 
      <NavLink to="/cart" >Cart</NavLink> || 
      <NavLink to="/wishlist" >Wishlist</NavLink> || 
      <NavLink to="/test" >Test</NavLink> || 
      <NavLink to="/login" >Login</NavLink> */}
      <header
        className={`w-full h-[50px] md:h-[60px] bg-white flex items-center justify-between z-20 fixed top-0 transition-transform duration-300 ${show}`}
      >
        <Wrapper className="h-[60px] flex justify-between items-center">
          <NavLink to="/" className="font-primary text-2xl ">
            KICKS.
          </NavLink>
          <Menu showCategory={showCategory} setShowCategory={setShowCategory} />
          {mobileMenu && (
            <MenuMobile
              showCategory={showCategory}
              setShowCategory={setShowCategory}
              setMobileMenu={setMobileMenu}
            />
          )}
          {/* icons menu start */}
          <div className="flex items-center gap-0 md:gap-5 text-black">
            <div className="hover:bg-black/[0.07] p-2 rounded-full">
              <NavLink to="/search">{<RiSearchLine size={24} />}</NavLink>
            </div>
            <div className="relative inline-block  hover:bg-black/[0.07] p-2 rounded-full">
              <NavLink to="/wishlist">{<RiHeart3Line size={24} />}</NavLink>
              {wishlist?.length <= 0 ? (
                ""
              ) : (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/6 bg-red-500 rounded-full">
                  {wishlistLength}
                </span>
              )}
            </div>
            <div className="relative inline-block hover:bg-black/[0.07] p-2 rounded-full">
              <NavLink to="/cart">{<IoBagOutline size={24} />}</NavLink>
              {cart?.length <= 0 ? (
                ""
              ) : (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/6 bg-red-500 rounded-full">
                  {cartLength}
                </span>
              )}
            </div>
            <div className="relative inline-block hover:bg-black/[0.07] p-2 rounded-full">
              <NavLink to="/profile">{<CgSmileMouthOpen size={24} />}</NavLink>
            </div>
            {/* mobile menu starts */}
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]cursor-pointer relative md:hidden">
              {mobileMenu ? (
                <IoMdClose size={24} onClick={() => setMobileMenu(false)} />
              ) : (
                <IoMenu size={24} onClick={() => setMobileMenu(true)} />
              )}
            </div>
            {/* mobile menu ends */}
          </div>
          {/* icons menu end */}
        </Wrapper>
      </header>
    </>
  );
};

export default Navigation;
