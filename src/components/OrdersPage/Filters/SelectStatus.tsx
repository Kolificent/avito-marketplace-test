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

const SELECT_LABEL = 'Статус';

function SelectStatus() {
  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{SELECT_LABEL}</InputLabel>
        <Select label={SELECT_LABEL}>
          {Object.values(OrderStatusLabels).map((option) => (
            <MenuItem key={option} id={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectStatus;
