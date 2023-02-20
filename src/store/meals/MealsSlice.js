import { fetchApi } from "../../lib/fetchApi";
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: " GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};


export const getMeals = createAsyncThunk('meals/getMeals', async(payload, {dispatch,rejectWithValue}) =>{
  try {
    dispatch(mealsActions.getMealsStarted());
    const { data } = await fetchApi("foods");
    dispatch(mealsActions.getMealsSuccess(data));
    return data
  } catch (error) {
    return rejectWithValue('something went wrong')
  }
})


export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state,action) =>{
      state.meals= action.payload
      state.isLoading =false
      state.error = ''
      
    })

    builder.addCase(getMeals.pending, (state) =>{
      state.isLoading = true
    })

    builder.addCase(getMeals.rejected, (state,action) =>{
      state.isLoading = false
      state.error = action.payload
    })

  }
  
})

export const mealsActions = mealsSlice.actions

