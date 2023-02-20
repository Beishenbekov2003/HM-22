import { createContext, useCallback, useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchApi";

export const BasketContext = createContext({
  items: [],
});

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getBasket = async () => {
    try {
      const { data } = await fetchApi("basket");
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = async (newItem) => {
    try {
      console.log(newItem);
      const response = await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });

      setItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBasketItem = async ({ id, amount }) => {
    try {
      const { data } = await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });

      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBasketItem = async (id) => {
    try {
      const { data } = await fetchApi(`basketItem/${id}/delete`, {
        method: "DELETE",
      });

      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const [showBasket, setShowBasket] = useState(false);

  const showBasketHandler = useCallback(() => {
    setShowBasket((prevState) => !prevState);
  }, []);

  const state = {
    items,
    addToBasket,
    updateBasketItem,
    deleteBasketItem,
    showBasket,
    showBasketHandler,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
