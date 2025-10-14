import React from "react";
import Image from "next/image";
import Button from "../Button";
import { btnStyles } from "../../constants";
import Link from "next/link";

const PostBanner = ({ image, headline, desc }) => {
  return (
    <div className="linear_gradient relative w-full after:absolute after:inset-0 after:mix-blend-multiply after:w-12/12 after:bg-gradient-to-r from-gray-500 to-gray-200">
   
      <div className="pt-2 h-[66.66vw] lg:h-[36.66vw] w-full relative">
        <Image
          // src="/assets/images/unsplash-1.jpeg"
          src={image}
          fill
          style={{ objectFit: "cover" }}
          // style={{
          //   borderRadius: "20px",
          //   }}
       
        />
      </div>
      <div className="absolute z-10 left-2 lg:left-[6rem] bottom-5 lg:bottom-[3rem] w-11/12 lg:w-5/12">
        <h1 className="text-white font-raleway font-bold text-[1.5rem] lg:text-[2.5rem] uppercase drop-shadow-[0_70px_70px_rgba(240,132,32,0.5)]">
          {headline}
        </h1>
        <p className="text-[14px] text-white font-[1rem] font-inter mb-2">
          {desc}
        </p>
       
      </div>
    </div>
  );
};

export default PostBanner;


