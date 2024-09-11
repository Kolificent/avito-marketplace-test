import { Box, Button, Paper } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import AdDetails from '../components/AdvertisementPage/AdDetails';
import { useParams } from 'react-router-dom';
import AdvertisementsAPI from '../api/advertisements';
import { Advertisment } from '../api/types';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectEditAdDialog } from '../selectors/dialogSelectors';
import { openEditAdDialog } from '../slices/editAdDialog';
import EditAdDialog from '../components/AdvertisementPage/EditAdDialog';

export default function AdvertisementPage() {
  const adId = useParams<{ id: string }>().id as string;
  const [advertisement, setAdvertisement] = useState<Advertisment | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function updateAdInfo() {
      const adInfo = await AdvertisementsAPI.getAdvertisementById(adId);
      setAdvertisement(adInfo);
    }
    updateAdInfo();
  }, [adId]);

  function handleClick() {
    dispatch(openEditAdDialog());
  }

  if (!advertisement) return null;

  return (
    <Fragment>
      <EditAdDialog advertisement={advertisement} />
      <Paper
        sx={{
          margin: 'auto',
          overflow: 'hidden',
          display: 'flex',
          gap: 2,
          padding: 2,
        }}
      >
        <Box display="flex" gap={4}>
          <Box
            sx={{
              width: '500px',
              height: '500px',
              objectFit: 'cover',
            }}
            overflow="hidden"
            component="img"
            src={advertisement.imageUrl}
            alt={advertisement.name}
            borderRadius={2}
          />
          <Box display="flex" flexDirection="column" gap={4}>
            <AdDetails
              title={advertisement.name}
              likes={advertisement.likes}
              views={advertisement.views}
              price={advertisement.price}
              description={advertisement.description}
            />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleClick}
            >
              Изменить объявление
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
}
