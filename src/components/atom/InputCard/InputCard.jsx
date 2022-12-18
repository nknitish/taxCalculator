import React from "react";
import { InputField } from "../InputField/InputField";
import { Text } from "../Text/Text";

const InputCard = ({ label, isFirst, ...props }) => {
  return (
    <>
      {label && (
        <Text
          marginTop={!isFirst && "10px"}
          text={label}
          gutterBottom={false}
          variant="overline"
          display="block"
        />
      )}
      <InputField {...props} />
    </>
  );
};

export default InputCard;
