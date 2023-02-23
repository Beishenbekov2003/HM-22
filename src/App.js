import { useCallback, useState } from "react";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { styled } from "@mui/system";
import { useFoods } from "./components/hooks/useFoods";
import Snackbar from "./components/UI/Snackbar";
import { uiActions } from "./store/ui/uiSlice";
import { Select, MenuItem } from "@mui/material";

function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);

  const snackbar = useSelector((state) => state.ui.snackbar);

  const { sortDirection, changesetSortDirection, meals, isLoading, error } =
    useFoods();
  const showBasketHnadler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);
  return (
    <Provider store={store}>
      <Header onShowBasket={showBasketHnadler} />

      <Summary />
      <Content>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth={true}
          value={sortDirection}
          onChange={(e) => changesetSortDirection(e.target.value)}
        >
          <MenuItem value={"ASC"}>CHEAPER</MenuItem>
          <MenuItem value={"DESC"}>MORE EXPENSIV</MenuItem>
        </StyledSelect>
      </Content>

      <Meals meals={meals} isLoading={isLoading} error={error} />
      {isBasketVisible && (
        <Basket open={isBasketVisible} onClose={showBasketHnadler} />
      )}
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => {
          dispatch(uiActions.closeSnackbar());
        }}
      />
    </Provider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;

const Content = styled("div")(() => ({
  "&": {
    marginTop: "101px",
  },
}));

const StyledSelect = styled(Select)(() => ({
  "&": {
    backgroundColor: "#ffff",
    marginBottom: "70px",
  },
}));
