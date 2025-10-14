import React from "react";
import Button from "../Button";
import { Row, Col, Typography, List, Card } from "antd";
import { Image as AntImage } from "antd";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
];

const CardItem = ({ data }) => {
  return data.map((item, idx) => (
    <div key={idx} className="space-y-2">
      <div className="text-[#1D1D1D] font-inter text-base font-normal">
        {item?.lead}
      </div>
      <h2 className="text-[#050504] font-bold font-raleway text-[30px]">
        {item?.title}
      </h2>
      <p className="text-[#131211] font-inter font-normal">
        {item?.description}
      </p>
    </div>
  ));
};
const ServicesWrapper = (props) => {
  const {
    title,
    data,
    cardTitle,
    cardDescription,
    btnOneText,
    btnOneClick,
    btnTwoText,
    btnTwoClick,
    image,
    link,
  } = props;
  return (
    <div className="w-full bg-white lg:px-[4rem] py-4">
      <h1 className="font-raleway font-thin ml-10 text-[28px]">{title}</h1>
      <div className="my-2 grid grid-cols-2 lg:grid-cols-6 gap-x-4">
        <div className="col-span-2 p-5">
          <Image src={image} alt={title} className="self-end" />
        </div>
        <div className="col-span-4 p-5">
          <div className="font-raleway text-[#070706] font-400 tracking-wider text-xl">
            {cardTitle}
          </div>
          <div className="text-base font-light font-inter text-[#1D1D1D] mt-2 mb-8">
            {cardDescription}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
            <CardItem data={data} />
          </div>
          <div className="my-8 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-4">
  
            {btnTwoText === "learn more" ? (
              <Link href={link} >
             
                  <Button
                    onClick={btnTwoClick}
                    text={btnTwoText}
                    shape="round"
                    size="large"
                    className="mybtn normal_btn uppercase"
                  />
              
              </Link>
            ) : (
              <Link href="/goal-based-investing#calulator" legacyBehavior>
         
                  <Button
                    onClick={btnTwoClick}
                    text={btnTwoText}
                    shape="round"
                    size="large"
                    className="mybtn normal_btn uppercase"
                  />
          
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWrapper;
