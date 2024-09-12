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
import { selectEditAdDialog } from '@selectors/dialogSelectors';
import { ChangeEvent, useState } from 'react';
import { closeEditAdDialog } from '@slices/editAdDialog';
import AdvertisementsAPI from '@api/advertisementsApi';
import type { Advertisment } from '@types';

interface EditAdDialogProps {
  advertisement: Advertisment;
}

export default function EditAdDialog({ advertisement }: EditAdDialogProps) {
  const dispatch = useAppDispatch();
  const dialogStatus = useAppSelector(selectEditAdDialog);

  const [adDetails, setAdDetails] = useState({
    name: advertisement.name,
    price: advertisement.price,
    description: advertisement.description,
    imageUrl: advertisement.imageUrl,
  });

  function handleClose() {
    dispatch(closeEditAdDialog());
    setAdDetails({
      name: advertisement.name,
      price: advertisement.price,
      description: advertisement.description,
      imageUrl: advertisement.imageUrl,
    });
  }

  function handleSubmit() {
    AdvertisementsAPI.updateAdvertisement({ ...advertisement, ...adDetails });
    dispatch(closeEditAdDialog());
    // не лучший подход
    window.location.reload();
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
