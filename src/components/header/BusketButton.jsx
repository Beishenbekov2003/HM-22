import { memo } from "react";
import styledComponents from "styled-components";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
const BasketButton = ({ count, ...restProps }) => {
  console.log(restProps);
  return (
    <StyledButton {...restProps}>
      <ShoppingCartSharpIcon />
      <StyledTitle>Your cart</StyledTitle>
      <CountStyled id="counter">{count || 0}</CountStyled>
    </StyledButton>
  );
};

export default memo(BasketButton);

const StyledButton = styled(Button)(() => ({
  background: "#5a1f08",
  borderRadius: "30px",
  padding: "12px 32px",
  fontSize: " 16px",
  fontWeight: " 600",
  lineHeight: "24px",
  color: "white",
  margin: "0",
  border: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#2c0d00",
  },
  "&:hover > #counter": {
    backgroundColor: "#531b03",
  },

  "&.bump": {
    animation: "bump 300ms ease-out",
  },

  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const StyledTitle = styledComponents.span`
  margin-left: 12px;
  margin-right: 24px;
`;
const CountStyled = styledComponents.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`;
