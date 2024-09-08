import React from 'react';
import Grid from '@mui/material/Grid2';
import AdvertisementCard from './AdvertisementCard/AdvertisementCard';

export default function AdvertisementGrid() {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((film) => (
        <Grid key={film}>
          <AdvertisementCard
            title="OLD SPICE мужской гель для душа + шампунь 3в1 Nightpanther, 675 мл"
            image="https://ir.ozone.ru/s3/multimedia-5/wc1000/6781259273.jpg"
            price={333}
            views={23}
            likes={3235}
          />
        </Grid>
      ))}
    </Grid>
  );
}
