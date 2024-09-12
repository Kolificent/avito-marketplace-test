import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ORDER_SORT_OPTIONS } from '@constants/sortOptions';
import { useAppDispatch, useAppSelector } from '@store';
import { selectOrdersSort } from '@selectors/ordersSelector';
import { changeOrdersSort } from '@slices/orders';

const SELECT_LABEL = 'Сортировать по';

function SelectOrdersSort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectOrdersSort);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(changeOrdersSort(e.target.value));
  };

  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{SELECT_LABEL}</InputLabel>
        <Select
          label={SELECT_LABEL}
          value={sort.toString()}
          onChange={handleChange}
        >
          {ORDER_SORT_OPTIONS.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectOrdersSort;
