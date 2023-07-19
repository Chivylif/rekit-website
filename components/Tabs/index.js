import React from "react";

const Tabs = (props) => {
  const { activeTab, text, onClick, tabkey, content } = props;
  return (
    <div
      className={`${
          activeTab === tabkey ? "bg-[#FBA14D]" : "bg-[#504D4A]"
        } rounded-lg py-5 cursor-pointer text-white font-raleway font-bold text-base flex justify-center flex-1 w-full`}
        onClick={onClick}
        >
      {text}
    </div>
  );
};

export default Tabs;
