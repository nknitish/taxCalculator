import React from "react";
import { Paper, styled } from "@mui/material";

const LayoutCard = styled(Paper)`
  padding: 1px 20px;
  border-radius: 0px;
  background-color: #1035a4;
`;

const Layout = (props) => <LayoutCard {...props}>{props?.children}</LayoutCard>;

export { Layout };
