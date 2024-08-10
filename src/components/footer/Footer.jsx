import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../../img//logo.svg";
import Vector from "../../img//Vector.png";
import Vector1 from "../../img//Vector1.png";
import Vector2 from "../../img//Vector2.png";
import footerBg from "../../img//footerBg.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-indigo-500 inPhone py-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 border-r-2 border-black-600 w-1/2">
          <div
            className="flex justify-center w-2/3 items-center mx-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="" alt="" />
          </div>
        </div>
        <div className="flex-1 px-16 border-r-2 border-black-600 w-1/2">
          <div className="flex">
            <ul>
              <li
                className="text-lg text-white font-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="text-lg text-white font-bold cursor-pointer"
                onClick={() => navigate("/support-center")}
              >
                Support Center
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer"
                onClick={() => navigate("help")}
              >
                Help Center
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer"
                onClick={() => navigate("/partner-dispute")}
              >
                Partner Dispute
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer"
                onClick={() => navigate("faq")}
              >
                FAQs
              </li>
            </ul>
          </div>
          <p className="text-md text-medium text-white mt-4">
            Please provide us Feedback{" "}
            <button
              onClick={() => navigate("/feedback")}
              className="text-xl underline"
            >
              HERE
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
