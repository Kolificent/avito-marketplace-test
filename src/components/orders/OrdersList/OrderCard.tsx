import {
  Box,
  Button,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Order } from '@types';
import { formatDate } from '@utils';
import { getStatusLabelById } from '@utils';
import OrdersAPI from '@api/ordersApi';
import { useAppDispatch } from '@store';
import { updateOrders } from '@slices/orders';
import AdvertisementCard from '@/components/advertisements/AdvertisementsGrid/AdvertisementCard';

interface OrderCardProps {
  id: Order['id'];
  status: Order['status'];
  createdAt: Order['createdAt'];
  items: Order['items'];
  total: number;
}

export default function OrderCard(order: OrderCardProps) {
  const [isItemsVisible, setIsItemsVisible] = useState(false);
  const dispatch = useAppDispatch();

  function handleClick() {
    setIsItemsVisible(!isItemsVisible);
  }

  function handleDeleteButton() {
    OrdersAPI.deleteOrder(order.id);
    dispatch(updateOrders());
  }
  return (
    <Paper elevation={1}>
      <Box display="flex" flexDirection="column" padding={2} gap={4}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            <Box display="flex" gap={1} alignItems="center">
              <Typography variant="h6">
                Заказ от {formatDate(order.createdAt)}
              </Typography>
              <IconButton onClick={handleDeleteButton}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Typography variant="caption">Номер: {order.id}</Typography>
            <Typography variant="body2">
              {getStatusLabelById(order.status)}
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-end" flexDirection="column">
            <Typography variant="h6" color="primary">
              {`₽${order.total}`}
            </Typography>
            <Button
              onClick={handleClick}
              variant="contained"
            >{`Посмотреть все товары (${order.items ? order.items.length : '0'})`}</Button>
          </Box>
        </Box>
        {isItemsVisible && (
          <Box>
            <Grid2 container spacing={2}>
              {order.items.map((ad) => {
                return (
                  <Grid2 key={ad.id}>
                    <AdvertisementCard
                      id={ad.id}
                      name={ad.name}
                      image={ad.imageUrl}
                      price={ad.price}
                      views={ad.views}
                      likes={ad.likes}
                    />
                  </Grid2>
                );
              })}
            </Grid2>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
