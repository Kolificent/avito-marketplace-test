import { ADVERTISEMENT_SORT_OPTIONS } from '@constants/sortOptions';
import { useAppDispatch, useAppSelector } from '@store';
import { selectAdsSort } from '@selectors/advertisements';
import { changeAdsSort } from '@slices/advertisements';
import { SelectChangeEvent } from '@mui/material';
import CustomSelect from '@components/ui/CustomSelect';

const SELECT_LABEL = 'Сортировать по';

function SelectAdsSort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectAdsSort);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeAdsSort(event.target.value));
  };

  return (
    <CustomSelect
      value={sort.toString()}
      onChange={handleChange}
      selectLabel={SELECT_LABEL}
      items={ADVERTISEMENT_SORT_OPTIONS}
    />
  );
}

export default SelectAdsSort;
