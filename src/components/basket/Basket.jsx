import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteBasketItem,
  submitOrder,
  updateBasketItem,
} from "../../store/meals/BasketSlice";
import { uiActions } from "../../store/ui/uiSlice";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import Modal from "@mui/material/Modal";
const Basket = ({ open, onClose }) => {
  const items = useSelector((state) => state.basket.items);

  const orderSubmitHandler = async () => {
    try {
      await dispatch(
        submitOrder({
          oderData: { items },
        })
      ).unwrap();

      dispatch(
        uiActions.showSnackbar({
          severity: "success",
          message: "Order completed successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showSnackbar({
          severity: "error",
          message: "Failed, try again later",
        })
      );
    } finally {
      onClose();
    }
  };

  const dispatch = useDispatch();
  const dec = useCallback(
    (id, amount) => {
      if (amount > 1) {
        dispatch(updateBasketItem({ amount: amount - 1, id: id }));
      } else {
        dispatch(deleteBasketItem(id));
      }
    },
    [dispatch]
  );

  const incrementAmount = useCallback(
    (id, amount) => {
      dispatch(updateBasketItem({ amount: amount + 1, id: id }));
    },
    [dispatch]
  );

  const getTotalPrice = useCallback(() => {
    return items.reduce((sum, { price, amount }) => (sum += price * amount), 0);
  }, [items]);
  return (
    <>
      <Modal open={open}>
        <Container>
          <StyledTotalContainer>
            <FiwedHeightContainer>
              {items.map((item) => {
                return (
                  <BasketItem
                    key={item._id}
                    incrementAmount={() =>
                      incrementAmount(item._id, item.amount)
                    }
                    dec={() => dec(item._id, item.amount)}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                );
              })}
            </FiwedHeightContainer>

            <TotalAmount
              price={getTotalPrice()}
              onClose={onClose}
              onOrder={orderSubmitHandler}
            />
          </StyledTotalContainer>
        </Container>
      </Modal>
    </>
  );
};

export default Basket;

const StyledTotalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;
const FiwedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;

const Container = styled.div`
  position: fixed;
  top: 20vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
