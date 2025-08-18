import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiButton from '@mui/material/Button';
import Select from '@mui/material/Select';
import { useParams, useLocation } from 'react-router-dom';

import {
  addFoodItem,
  foodErorSelector,
  foodItemsSelector,
  foodLoadingSelector,
} from '../store/foodSlice';
import ReduxProvider from '../store/ReduxProvider';
import { useEffect } from 'react';
import { fetchFood } from '../store/thunks';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const foodItems = {
  frozenYoghurt: createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  iceCreamSandwitch: createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  eclair: createData('Eclair', 262, 16.0, 24, 6.0),
  cupcake: createData('Cupcake', 305, 3.7, 67, 4.3),
  gingerBread: createData('Gingerbread', 356, 16.0, 49, 3.9),
};

const RandomTableComponent = ({ C, R, U, D }) => {
  // react-router-dom needs to be singleton
  const { id } = useParams();

  const food = useSelector(foodItemsSelector);
  const foodLoading = useSelector(foodLoadingSelector);
  const foodError = useSelector(foodErorSelector);

  // Error management
  const dispatch = useDispatch();

  // Listenerid, evendid

  // Proovi slice injectida ?

  useEffect(() => {
    console.log('SIIN table MOUNTED', id);

    if (id) {
      if (
        !food.length ||
        !food.every((foodItem) => foodItem.cartId?.toString() === id)
      ) {
        dispatch(fetchFood(id));
      }
    }

    return () => {
      console.log('SIIN table unmounted');
    };
  }, [id]);

  const [selectedItem, setSelectedItem] = useState();

  // KOMPONENT
  const addItem = () => {
    if (selectedItem) {
      const newItem = {
        id: Math.random(),
        ...selectedItem,
        cartId: id.toString(),
      };
      dispatch(addFoodItem(newItem));
    }
  };

  const handleChange = (event) => {
    console.log('SIIN handleChange');
    setSelectedItem(foodItems[event.target.value]);
  };

  console.log('SIIN FOOD ', food);

  console.log('SIIN id', id);

  if (!id || !food.length || foodLoading) {
    return <>Laen andmeid ...</>;
  }

  return (
    <>
      <FormControl fullWidth sx={{ marginTop: '20px' }}>
        <InputLabel id="demo-simple-select-label">
          Vali lisatav toode
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          label="Age"
          onChange={handleChange}
        >
          {Object.keys(foodItems).map((key) => (
            <MenuItem value={key}>{foodItems[key].name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <MuiButton variant="contained" onClick={addItem}>
        Add
      </MuiButton>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {food.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// Each section needs their own store then I guess
const RandomTable = () => {
  return (
    <ReduxProvider>
      <RandomTableComponent />
    </ReduxProvider>
  );
};

export default RandomTable;
