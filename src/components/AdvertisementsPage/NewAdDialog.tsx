import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@store';
import { selectNewAdDialog } from '@selectors/dialogSelectors';
import { closeNewAdDialog } from '@slices/newAdDialog';
import AdvertisementsAPI from '@api/advertisementsApi';
import { ChangeEvent, useState } from 'react';
import { updateAdvertisements } from '@slices/advertisements';

export default function NewAdDialog() {
  const dispatch = useAppDispatch();
  const dialogStatus = useAppSelector(selectNewAdDialog);

  const [adDetails, setAdDetails] = useState({
    title: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  function handleClose() {
    dispatch(closeNewAdDialog());
    setAdDetails({
      title: '',
      price: '',
      description: '',
      imageUrl: '',
    });
  }

  function handleSubmit() {
    const { title, price, description, imageUrl } = adDetails;
    AdvertisementsAPI.createAdvertisement(title, price, imageUrl, description);
    dispatch(closeNewAdDialog());
    dispatch(updateAdvertisements());
    setAdDetails({
      title: '',
      price: '',
      description: '',
      imageUrl: '',
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAdDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  return (
    <Dialog open={dialogStatus.isOpen} onClose={handleClose}>
      <DialogTitle>Создание нового объявления</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Пожалуйста, заполните следующие поля
        </DialogContentText>
        <TextField
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
        <Button onClick={handleSubmit} autoFocus>
          Ок
        </Button>
      </DialogActions>
    </Dialog>
  );
}
