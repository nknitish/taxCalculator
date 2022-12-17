import React from "react";
import { InputField } from "../InputField/InputField";
import { Text } from "../Text/Text";

const InputCard = ({ label, ...props }) => {
  return (
    <>
      {label && <Text marginTop={"20px"} text={label} />}
      <InputField marginTop={"5px"} {...props} />
    </>
  );
};

export default InputCard;
