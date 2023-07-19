import React from "react";

const up = (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.41 7.40625L6 2.82625L10.59 7.40625L12 5.99625L6 -0.00374985L0 5.99625L1.41 7.40625Z"
      fill="#2C2C2C"
    />
  </svg>
);

const ManagementTeamDetails = (props) => {
  const {
    left,
    displayDetails,
    showDetails,
    step,
    about = ["asdf;lkj"],
  } = props;
  console.log("left is " + left);
  const myleft =
    step === 1
      ? "before:left-100"
      : step === 2
      ? "before:left-200"
      : step === 3
      ? "before:left-300"
      : step === 4
      ? "before:left-300"
      : step === 5
      ? "before:left-300"
      : "before:left-400";
  return (
    <div>
      {displayDetails && (
        <div
          className={`bg-[#F6F6F6] relative p-5 px-10 before:hidden lg:before:block ${myleft} before:top-[-18px] before:w-10 before:h-10 before:absolute  before:-rotate-[45deg] before:bg-[#F6F6F6]`}
        >
          {about.map((item, idx) => (
            <p key={idx} className="text-[#262626] leading-10">
              {item}
            </p>
          ))}
        </div>
      )}
      {displayDetails && (
        <div
          className="mt-10 font-inter text-[#2C2C2C] flex items-center cursor-pointer"
          onClick={showDetails}
        >
          Hide details &nbsp; {up}
        </div>
      )}
    </div>
  );
};

export default ManagementTeamDetails;
