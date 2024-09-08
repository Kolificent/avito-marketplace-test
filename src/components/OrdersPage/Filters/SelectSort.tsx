import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { OrderStatusLabels } from '../../../constants/orderStatusTitles';
import { ORDER_SORT_OPTIONS } from '../../../constants/sortOptions';

const SELECT_LABEL = 'Сортировать по';

function SelectSort() {
  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{SELECT_LABEL}</InputLabel>
        <Select label={SELECT_LABEL}>
          {ORDER_SORT_OPTIONS.map((option) => (
            <MenuItem key={option.id} id={option.name} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectSort;
