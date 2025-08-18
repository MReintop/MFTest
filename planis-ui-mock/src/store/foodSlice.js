import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchFood } from './thunks';

const initialState = {
  foodItems: [],
  loading: false,
  foodError: false,
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFoodItem: (state, action) => {
      state.foodItems.push(action.payload);
    },
    removeFoodItem: (state, action) => {
      const currentItems = state.foodItems;
      state.foodItems = currentItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFood.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.foodItems = payload;
    });
    builder.addCase(fetchFood.pending, (state) => {
      state.foodError = false;
      state.loading = true;
    });
    builder.addCase(fetchFood.rejected, (state) => {
      state.loading = false;
      state.foodError = true;
    });
  },
});

const selectSelf = (state) => state;

export const foodItemsSelector = createSelector(
  selectSelf,
  (state) => state.food.foodItems,
);

export const foodLoadingSelector = createSelector(
  selectSelf,
  (state) => state.food.loading,
);

export const foodErorSelector = createSelector(
  selectSelf,
  (state) => state.food.error,
);

// Action creators are generated for each case reducer function
export const { addFoodItem, removeFoodItem } = foodSlice.actions;

export default foodSlice.reducer;
