import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '@store';
import { openNewAdDialog } from '@slices/newAdDialog';

export default function NewAdButton() {
  const dispatch = useAppDispatch();
  // const dialogStatus = useAppSelector(selectNewAdDialog);

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
