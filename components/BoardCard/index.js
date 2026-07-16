import React, { useCallback } from "react";
import Image from "next/image";

const down = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.59 0.59375L6 5.17375L1.41 0.59375L0 2.00375L6 8.00375L12 2.00375L10.59 0.59375Z"
      fill="#2C2C2C"
    />
  </svg>
);

const BoardCard = (props) => {
  const {
    image,
    name,
    role,
    cert,
    showDetails,
    step,
    switchStep,
    showStep,
    myShow,
  } = props;
  const showMyDetails = () => {
    switchStep(step);
    showDetails();
  }
  return (
    <div>
      <Image src={image} alt={`the image of ${name}`} />
      <h3 className="text-[#F08420] font-raleway font-bold text-[18px]">
        {name} <span className="uppercase">{cert && `(${cert})`}</span>
      </h3>
      <h5 className="text-base font-inter text-[#4D4D4D">{role}</h5>
      {/* {step === 4 && myShow ? 'na me' : 'no be me'} */}
      <small
        onClick={showMyDetails}
        className="mt-5 font-inter text-[#2C2C2C] text-sm cursor-pointer flex items-center font-medium"
      >
        View details &nbsp; {down} 
        {/* {step} */}
      </small>
    </div>
  );
};

export default BoardCard;
