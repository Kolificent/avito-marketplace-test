import { useAppDispatch, useAppSelector } from '@store';
import { ORDER_SORT_OPTIONS } from '@constants/sortOptions';
import { changeOrdersSort } from '@slices/orders';
import { selectOrdersSort } from '@selectors/orders';
import { SelectChangeEvent } from '@mui/material';
import CustomSelect from '@components/ui/CustomSelect';

const SELECT_LABEL = 'Сортировать по';

function SelectOrdersSort() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectOrdersSort);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(changeOrdersSort(e.target.value));
  };

  return (
    <CustomSelect
      value={sort.toString()}
      onChange={handleChange}
      selectLabel={SELECT_LABEL}
      items={ORDER_SORT_OPTIONS}
    />
  );
}

export default SelectOrdersSort;
