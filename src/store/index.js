import { combineReducers, applyMiddleware, createStore } from "redux";
import { mealsSlice } from "./meals/MealsSlice";
import thunk from "redux-thunk";
import { basketSlice } from "./meals/BasketSlice";
import { uiSlice } from "./ui/uiSlice";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [uiSlice.name] : uiSlice.reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
