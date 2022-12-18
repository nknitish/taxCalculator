import { Divider } from "@mui/material";
import React from "react";
import { Text } from "../Text/Text";
import { Root, Row } from "./TableRow.style";

const TableRow = ({ text, value, ...props }) => {
  return (
    <Root>
      <Row>
        <Text text={text} variant="overline" display="block" {...props} />
        <Text text={value} variant="button" display="block" {...props} />
      </Row>
      <Divider />
    </Root>
  );
};

export default TableRow;
