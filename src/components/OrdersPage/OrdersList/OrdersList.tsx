import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function OrdersList() {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid width={1}>
        <Paper elevation={1} sx={{ padding: 1 }}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" flexDirection="column">
              <Box display="flex" gap={1} alignItems="center">
                <Typography variant="h6">Заказ от 23.23</Typography>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Typography variant="caption">3123</Typography>
              <Typography variant="body2">Получен</Typography>
            </Box>
            <Box display="flex" alignItems="flex-end" flexDirection="column">
              <Typography variant="h6" color="primary">
                ₽12312
              </Typography>
              <Button variant="contained">Посмотреть все товары (2)</Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
