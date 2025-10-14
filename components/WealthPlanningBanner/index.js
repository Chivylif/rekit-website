import React from "react";
import Image from "next/image";
import Button from "../Button";
import { btnStyles } from "../../constants";
import Link from "next/link";

const WealthPlanningBanner = ({ image, headline, desc }) => {
  return (
    <div className="linear_gradient relative w-full after:absolute after:inset-0 after:mix-blend-multiply after:w-12/12 after:bg-gradient-to-r from-gray-500 to-gray-200">
      {/* <Image src={image} alt="about rekit web application and website" /> */}
      {/* <div className="banner-image-container">
        <Image
          src={image}
          layout="fill"
          alt="about rekit web application and website"
          className="image"
        />
      </div> */}
      <div className="pt-2 h-[66.66vw] lg:h-[36.66vw] w-full relative">
        <Image
          // src="/assets/images/unsplash-1.jpeg"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" absolute z-10 left-2  lg:left-[6rem] bottom-5 lg:bottom-[10rem] w-11/12 lg:w-5/12 ">
        <h1 className="text-white font-raleway font-bold text-[25px] lg:text-[45px] uppercase">
          {headline}
        </h1>
        <p className="text-[14px] text-white font-[500] font-inter mb-8">
          {desc}
        </p>

        <Link href="/goal-based-investing#calulator" legacyBehavior>
     
            <Button
              // style={btnStyles}
              text="Wealth Calculator"
              shape="round"
              size="large"
              className="mybtn highlighted_btn uppercase font-bold border-0"
              style={{
                padding: ".5rem 2rem",
                minHeight: "3rem",
                fontSize: ".8rem",
              }}
            />
      
        </Link>
        {/* <Button
          text={btnText}
          shape="round"
          size="large"
          className="mybtn highlighted_btn font-bold"
          style={{padding: '.5rem 2rem', minHeight: '3rem', fontSize: '.8rem'}}
          onClick={navigate}
        /> */}
      </div>
    </div>
  );
};

export default WealthPlanningBanner;

{
  /* <div className="after:w-6/12 after:bg-gray-500 after:h-full"></div> */
}
