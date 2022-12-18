import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import MoneyOffRoundedIcon from "@mui/icons-material/MoneyOffRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

export const taxCalculatorSteps = [
  {
    label: "Fill your Income",
    secondaryText: "Salary + Other Income",
    icon: <MonetizationOnRoundedIcon />,
  },
  {
    label: "Fill your Deduction",
    secondaryText: "HRA | 80C ",
    icon: <MoneyOffRoundedIcon />,
  },
  {
    label: "Get Your tax ready",
    secondaryText: "In Old & New Regime",
    icon: <DashboardRoundedIcon />,
  },
];

export const incomeList = [
  {
    label: "Enter Basic Salary",
    name: "basic",
  },
  { label: "Enter HRA", name: "hra" },
  {
    label: "Enter Special allowance",
    name: "spAllowance",
  },
  {
    label: "Enter Other Income",
    name: "other",
  },
];

export const investment_80C_List = [
  { label: "Enter Provident Fund ( PF ) ", name: "epf" },
  { label: "Enter Mutual Fund ( ELSS ) ", name: "elss" },
  { label: "Enter Public PF ( PPF )", name: "ppf" },
  { label: "Other investment (VPF/Insurance)", name: "other" },
];
