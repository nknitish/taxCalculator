import { Paper, styled } from "@mui/material";

export const Layout = styled(Paper)`
  padding: 1px 5%;
  border-radius: 0px;
  min-height: 100vh;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    padding: 1px 28%;
  }
`;
