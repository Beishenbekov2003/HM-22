import React, { memo } from "react";
import styled from "styled-components";

const SummaryInfoCard = () => {
  return (
    <Card>
      <StyledHeading>Delicious Food, Delivered To You</StyledHeading>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
};

export default memo(SummaryInfoCard);

const Card = styled.div`
  width: 53.375rem;
  text-align: center;
  padding: 2.25rem 3.375rem;
  position: relative;
  margin: -12rem auto auto;
  bottom: 0;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  box-shadow: 0 1px 18px 10px rgb(0, 0, 0, 25%);
`;
const StyledHeading = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;
