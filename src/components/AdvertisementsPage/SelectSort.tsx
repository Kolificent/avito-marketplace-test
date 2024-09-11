import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ADVERTISEMENT_SORT_OPTIONS } from '../../constants/sortOptions';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectAdsSort } from '../../selectors/advertisementsSelector';
import { changeAdsSort } from '../../slices/advertisements';

const SELECT_LABEL = 'Сортировать по';
function SelectSort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectAdsSort);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeAdsSort(event.target.value));
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
          {ADVERTISEMENT_SORT_OPTIONS.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectSort;
