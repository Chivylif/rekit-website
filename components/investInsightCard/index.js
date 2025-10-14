import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/images/lifestyle.png";

const InsightCard = (props) => {
  const {
    displayImage = true,
    title,
    description,
    right,
    name,
    date,
    articleLink,
    clickHandler,
    image,
  } = props;
  return (
    <div
      className={` ${
        right && "pl-4"
      } flex-col justify-center content-center lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:content-between insightcard lg:max-w-fit`}
    >
      {displayImage && (
        <div className="mx-auto px-[1rem]">
          <Image
            src={image}
            alt="img"
            width={150}
            height={150}
            style={{
              borderRadius: "10px",
            }}
          />
        </div>
      )}
      <div className="mx-auto px-[1rem] lg:flex-wrap py-[1rem] lg:max-w-2xl">
        <div className="flex flex-row justify-start">
          <p className="leading-[1rem] font-bold font-inter text-[#212020] text-[.8rem]">
            {name}
          </p>
          <p className="w-8"></p>
          <p className="leading-[1rem] font-normal font-inter text-[#404040] text-[.6rem]">
            {date}
          </p>
        </div>
        <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
          {title}
        </h1>
        <p className="leading-[.8rem] font-normal font-inter text-[#212020] text-[.6rem]">
          {description}
        </p>
        <Button
          shape="round"
          size="small"
          text="Read More"
          className="mybtn highlighted_btn mt-2 font-semibold"
          onClick={clickHandler}
          data-index={articleLink}
        />
      </div>
      {/* </a>
      </Link> */}
    </div>
  );
};

export default InsightCard;
