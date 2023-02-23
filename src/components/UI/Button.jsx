import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material"

const MuiButton = ({
  children,
  variant = "contained",
  styles = "rounded",
  ...restProps
}) => {

  return (
    <StyledMiuButton {...restProps} styles={styles} variant={variant}>
      {children}
    </StyledMiuButton>
  );
};

export default MuiButton;

const getBackgroundColor = (variant) => {
  return variant === "contained" ? "#9b3107" : "#fff";
};

const getBorder = (variant) => {
  return variant === "contained" ? "none" : "1px solid #9b3107";
};

const getColor = (variant) => {
  return variant === "contained" ? "#fff" : "#8A2B06";
};

const getBorderRadius = (styles) => {
  return styles === "rounded" ? "20px" : "6px";
};

const StyledMiuButton = styled(Button) (({variant, styles} ) => ({
  backgroundColor:  getBackgroundColor(variant),
  borderRadius: getBorderRadius(styles),
  padding:' 10px 32px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: getColor(variant),
  border: getBorder(variant),
  '&:hover' : {
    backgroundColor: '#7e2a0a',
    color: '#fff',
  },
  '&:active' : {
    backgroundColor: '#993108',
  },
  '&:disabled' : {
    backgroundColor: '#cac6c4',
  },
}))
  

