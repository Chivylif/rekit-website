import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import Modal from "../Modal";
import CarPlan from "../CarPlan";
import HomePlan from "../HomePlan";

const AboutUsCard = (props) => {
  const {
    image,
    title,
    desc,
    listHead,
    list = [],
    order,
    listStyle,
    open,
    viewButton,
  } = props;

  return (
    <section className="text-blue-500 text-2xl grid lg:grid-cols-2 lg:gap-x-5">
      <div>
        <Image src={image} alt={desc} />
      </div>
      <article className={`py-5 px-4 ${order && "order-first"}`}>
        <h1 className="font-raleway font-bold text-[22px] text-[#F08420] mt-12">
          {title}
        </h1>
        <p className="leading-[1.8rem] font-inter text-[#212020] text-base font-normal my-5">
          {desc}
        </p>
        <p className="text-[#212020] text-base font-normal mb-2">{listHead}</p>
        {list && (
          <ul className="m-0 ml-0 p-0">
            {list.map((item, idx) => (
              <li
                key={idx}
                className={`text-[#212020] ${
                  !listStyle ? "list-none" : "list-disc"
                } font-inter font-normal text-base py-[0.3rem] text-justify`}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {viewButton && (
          <div className="flex gap-x-5">

            <Button
              text="calculate"
              shape="round"
              size="large"
              className="mybtn highlighted_btn mt-5 uppercase font-semibold"
              onClick={open}
            />
          </div>
        )}
      </article>
    </section>
  );
};

export default AboutUsCard;
