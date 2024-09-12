import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { updateAdvertisements } from '@slices/advertisements';
import { closeNewAdDialog } from '@slices/newAdDialog';
import { selectNewAdDialog } from '@selectors/dialogs';
import AdvertisementsAPI from '@api/advertisementsApi';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const DEFAULT_DIALOG_INPUTS = {
  name: '',
  price: '',
  description: '',
  imageUrl: '',
};

export default function NewAdDialog() {
  const dispatch = useAppDispatch();
  const dialogStatus = useAppSelector(selectNewAdDialog);

  const [adDetails, setAdDetails] = useState(DEFAULT_DIALOG_INPUTS);

  function handleClose() {
    dispatch(closeNewAdDialog());
    setAdDetails(DEFAULT_DIALOG_INPUTS);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name: title, price, description, imageUrl } = adDetails;
    const fixedPrice = parseInt(price.toString(), 10);
    AdvertisementsAPI.createAdvertisement(
      title,
      fixedPrice,
      imageUrl,
      description,
    );
    dispatch(closeNewAdDialog());
    dispatch(updateAdvertisements());
    setAdDetails(DEFAULT_DIALOG_INPUTS);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setAdDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  return (
    <Dialog
      open={dialogStatus.isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Создание нового объявления</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Пожалуйста, заполните следующие поля
        </DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          label="Имя"
          type="text"
          fullWidth
          name="name"
          value={adDetails.name}
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          label="Цена"
          type="number"
          fullWidth
          name="price"
          value={adDetails.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Описание"
          type="text"
          fullWidth
          multiline
          rows={1}
          name="description"
          value={adDetails.description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Ссылка на изображение"
          type="text"
          fullWidth
          name="imageUrl"
          value={adDetails.imageUrl}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button type="submit" autoFocus>
          Ок
        </Button>
      </DialogActions>
    </Dialog>
  );
}
