import React from "react";

const FormFeedback = ({ message }) => {
  return <>{message && <div className="text-red-500 text-xs font-inter capitalize mt-2">{message}</div>}</>;
};

export default FormFeedback;
