import { useAppDispatch } from '@store';
import { openNewAdDialog } from '@slices/newAdDialog';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function NewAdButton() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(openNewAdDialog());
  }
  return (
    <Fab variant="extended" color="primary" onClick={handleClick}>
      <AddIcon sx={{ mr: 1 }} />
      Добавить объявление
    </Fab>
  );
}
