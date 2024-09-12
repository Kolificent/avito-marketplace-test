import { STATUS_FILTER_LABELS } from '@constants/statusFilterLabels';
import { useAppDispatch, useAppSelector } from '@store';
import { selectStatusFilter } from '@selectors/orders';
import { changeStatusFilter } from '@slices/orders';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const SELECT_LABEL = 'Статус';

function SelectOrdersStatus() {
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
          {STATUS_FILTER_LABELS.slice(0, -1).map(({ id, label }) => (
            <MenuItem key={id} value={id}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectOrdersStatus;
