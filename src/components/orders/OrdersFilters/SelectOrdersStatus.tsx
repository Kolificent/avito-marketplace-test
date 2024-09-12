import { STATUS_FILTER_LABELS } from '@constants/statusFilterLabels';
import { useAppDispatch, useAppSelector } from '@store';
import { selectStatusFilter } from '@selectors/orders';
import { changeStatusFilter } from '@slices/orders';
import { SelectChangeEvent } from '@mui/material';
import CustomSelect from '@components/ui/CustomSelect';

const SELECT_LABEL = 'Статус';

function SelectOrdersStatus() {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector(selectStatusFilter);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(changeStatusFilter(e.target.value));
  };

  // чтобы статус "Не выбран" был первым в списке, у него номер 7 (из-за ТЗ)
  const items = [STATUS_FILTER_LABELS[7], ...STATUS_FILTER_LABELS.slice(0, -1)];

  return (
    <CustomSelect
      value={statusFilter.toString()}
      onChange={handleChange}
      selectLabel={SELECT_LABEL}
      items={items}
    />
  );
}

export default SelectOrdersStatus;
