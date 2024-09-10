import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { selectPageCount } from '../../../selectors/advertisementsSelector';
import { changePageCount } from '../../../slices/advertisements';

export default function ItemCountSelector() {
  const dispatch = useAppDispatch();
  const pageCount = useAppSelector(selectPageCount);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changePageCount(event.target.value));
  };

  return (
    <Box sx={{ width: 320 }}>
      <FormControl fullWidth>
        <InputLabel>Количество товаров на странице</InputLabel>
        <Select
          value={pageCount.toString()}
          label="Количество товаров на странице"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
