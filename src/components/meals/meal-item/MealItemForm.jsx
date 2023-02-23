import styledComponent from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/meals/BasketSlice";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import MuiButton from "../../UI/Button";
import AddSharpIcon from '@mui/icons-material/AddSharp';

const MealItemForm = ({ id, price, title }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <label htmlFor={id}>Amount:</label>
        <StyledTextField
          type="number"
          id={id}
          value={amount}
          onChange={amountChangeHandler}
          inputProps={{ min: 0, max: 5 }}
          min={0}
          max={5}
        />
      </Container>
      <MuiButton
        variant="contained"
        styles="rounded"
        onClick={submitHandler}
      >
        <StyledIcon/>
        Add
      </MuiButton>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledTextField = styled(TextField)(() => ({
  "&": {
    width: "70px",
    height: "40px",
    marginBottom: "10px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "5px 10px",
    fontSize: "14px",
  },
}));

const Container = styledComponent.div`
  margin-bottom: 10px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222;
    margin-right: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledForm = styledComponent.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledIcon = styledComponent(AddSharpIcon)`
  margin-right: 10px;
`;
