import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { STATUS_FILTER_LABELS } from '@constants/statusFilterLabels';
import { useAppDispatch, useAppSelector } from '@store';
import { selectStatusFilter } from '@selectors/ordersSelector';
import { changeStatusFilter } from '@slices/orders';

const SELECT_LABEL = 'Статус';

function SelectStatus() {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector(selectStatusFilter);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(changeStatusFilter(e.target.value));
  };

  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{SELECT_LABEL}</InputLabel>
        <Select
          label={SELECT_LABEL}
          value={statusFilter.toString()}
          onChange={handleChange}
        >
          <MenuItem value={7}>Не выбран</MenuItem>
          {STATUS_FILTER_LABELS.slice(0, -1).map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectStatus;
