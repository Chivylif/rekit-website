import React from "react";

const WeServe = (props) => {
  const { item } = props;
  return (
    <div className="grid lg:grid-cols-1 mb-8 lg:mb-16 lg:gap-x-5">
      <div>
        <p className="leading-[38px] font-inter text-base">{item}</p>
      </div>
    </div>
  );
};

export default WeServe;
