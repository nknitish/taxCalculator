import React from "react";
import { Paper, CardContent, styled } from "@mui/material";

const LayoutCard = styled(Paper)`
  padding: 20px;
  height: 100vh;
  background-color: #1035a4;
`;

const Layout = (props) => <LayoutCard {...props}>{props?.children}</LayoutCard>;

export { Layout };
