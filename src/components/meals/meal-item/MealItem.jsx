import { memo } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <Container>
      <StyledItemInfo>
        <Styledtitle>{meal.title}</Styledtitle>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledItemInfo>
      <MealItemForm price={meal.price} title={meal.title} id={meal._id} />
    </Container>
  );
};

export default memo(MealItem);

const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  padding-bottom: 1rem;

  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 2.25px;
  margin-bottom: 0;

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 5px 0px;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
`;
const Styledtitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`;
