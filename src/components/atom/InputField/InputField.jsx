import { OutlinedInput, styled } from "@mui/material";
import { useState, useEffect } from "react";
import Colors from "./../../../theme/Colors";

const StyleInputField = styled(OutlinedInput)`
  height: 30px;
  border-radius: 20px;
  margin-top: ${(props) => props.marginTop};
  background-color: ${(props) => props?.readOnly && Colors.lightGreish};
`;

export const InputField = ({ value, onChange, ...props }) => {
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    if (!value) {
      setInputVal("");
    }
  }, [value]);
  const handleInputChange = (event) => {
    setInputVal(event.target.value);
    onChange(event);
  };
  return (
    <StyleInputField
      fullWidth
      type="number"
      value={inputVal}
      {...props}
      onChange={handleInputChange}
    />
  );
};

export const InputContainer = styled("div")`
  padding: 0 20px;
`;
