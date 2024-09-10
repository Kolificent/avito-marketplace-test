import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Order } from '../../../api/types';
import { formatDate } from '../../../utils/formatDate';
import { getStatusLabel } from '../../../utils/getStatusById';

interface OrderCardProps {
  id: Order['id'];
  status: Order['status'];
  createdAt: Order['createdAt'];
  items: Order['items'];
  total: number;
}

export default function OrderCard(order: OrderCardProps) {
  return (
    <Paper elevation={1} sx={{ padding: 1 }}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box display="flex" gap={1} alignItems="center">
            <Typography variant="h6">
              Заказ от {formatDate(order.createdAt)}
            </Typography>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Typography variant="caption">Номер: {order.id}</Typography>
          <Typography variant="body2">
            {getStatusLabel(order.status)}
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end" flexDirection="column">
          <Typography variant="h6" color="primary">
            {`₽${order.total}`}
          </Typography>
          <Button variant="contained">{`Посмотреть все товары (${order.items ? order.items.length : '0'})`}</Button>
        </Box>
      </Box>
    </Paper>
  );
}
