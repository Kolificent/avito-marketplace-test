import { ChangeEvent, FormEvent, useState } from 'react';
import AdvertisementsAPI from '@api/advertisementsApi';
import type { Advertisment } from '@types';
import { useAppDispatch, useAppSelector } from '@store';
import { closeEditAdDialog } from '@slices/editAdDialog';
import { selectEditAdDialog } from '@selectors/dialogSelectors';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    AdvertisementsAPI.updateAdvertisement({ ...advertisement, ...adDetails });
    dispatch(closeEditAdDialog());
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
          autoFocus
          required
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
