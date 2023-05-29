import React from "react";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      className={`w-full max-h-full p-6 md:h-[180px] bg-gray-900 flex items-center justify-between bottom-0 transition-transform duration-300 text-white `}
    >
      <Wrapper className="flex justify-between items-center flex-wrap">
        <div>
          <NavLink to="/" className="font-primary text-5xl">
            KICKS.
          </NavLink>
          <br />
          <span className="text-semibold text-xl">Elevate every step.</span>
        </div>
        <div className="pt-5 md:pt-0">
          <p>Let's Connect</p>
          <ul className="flex gap-3 mt-3">
            <li>
              <NavLink to="/github">
                <ImGithub size={24} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/github">
                <BsTwitter size={24} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/github">
                <BsLinkedin size={24} />
              </NavLink>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
