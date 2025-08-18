import { createAsyncThunk } from '@reduxjs/toolkit';

const mockFood = {
  1: [
    {
      id: Math.random(),
      cartId: 1,
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: Math.random(),
      cartId: 1,
      name: 'Ice cream sandwitch',
      calories: 237,
      fat: 9.0,
      cartId: 1,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: Math.random(),
      name: 'Eclair',
      cartId: 1,
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
  ],

  2: [
    {
      id: Math.random(),
      cartId: 2,
      name: 'Eclair',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      id: Math.random(),
      name: 'Eclair',
      calories: 237,
      fat: 9.0,
      cartId: 2,
      carbs: 37,
      protein: 4.3,
    },
    {
      id: Math.random(),
      name: 'Eclair',
      cartId: 2,
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
  ],
};

const getFoodItems = async (cartId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockFood[cartId]);
    }, 1000);
  });
};

export const fetchFood = createAsyncThunk('food/fetchFood', async (cartId) => {
  const food = await getFoodItems(cartId);
  return food;
});
