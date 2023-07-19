import React, { useState } from "react";
import ServicesWrapper from "../../components/SericesWrapper";
import { serviceCardItems } from "../../constants";

const ServiceWrapperContainer = () => {
  const [items, setItems] = useState(serviceCardItems);

  return items.map((item, idx) => (
    <ServicesWrapper
      key={idx}
      title={item.title}
      image={item.image}
      cardTitle={item.cardTitle}
      cardDescription={item.cardDescription}
      data={item.data}
      btnTwoText={item.btnTwoText}
      btnOneText={item.btnOneText}
      btnOneClick={item.btnOneClick}
      btnTwoClick={item.btnTwoClick}
      link={item.link}
    />
  ));
};

export default ServiceWrapperContainer;
