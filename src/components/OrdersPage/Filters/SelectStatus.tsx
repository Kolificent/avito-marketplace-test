import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ORDER_STATUS_LABELS } from '../../../constants/orderStatusTitles';

const SELECT_LABEL = 'Статус';

function SelectStatus() {
  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{SELECT_LABEL}</InputLabel>
        <Select label={SELECT_LABEL}>
          {Object.values(ORDER_STATUS_LABELS).map((option) => (
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
