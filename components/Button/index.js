import React from "react";
import { Button as AntButton } from "antd";

const Button = (props) => {
  const {
    shape,
    text,
    type,
    icon,
    size,
    danger,
    block,
    style,
    className,
    onClick,
  } = props;
  return (
    <AntButton
      onClick={onClick}
      shape={shape}
      type={type}
      icon={icon}
      size={size}
      danger={danger}
      block={block}
      style={style}
      className={className}
    >
      {text}
    </AntButton>
    // <button style={style}
    // onClick={onClick}
    // className={className}>{text}</button>
  );
};

export default Button;
