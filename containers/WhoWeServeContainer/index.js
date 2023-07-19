import React, { useState } from "react";
import { whoWeServe } from "../../constants";

const WhoWeServeContainer = () => {
  const items = useState(whoWeServe);
  return items?.map((item, idx) => (
    <p key={idx} className="leading-[38px] font-inter text-base">
      {item}
    </p>
  ));
};

export default WhoWeServeContainer;
