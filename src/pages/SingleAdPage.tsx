import { Box, Button, CircularProgress, Paper } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import AdDetails from '@/components/singleAd/AdDetails';
import { useParams } from 'react-router-dom';
import AdvertisementsAPI from '@api/advertisementsApi';
import type { Advertisment } from '@types';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch } from '@store';
import { openEditAdDialog } from '@slices/editAdDialog';
import EditAdDialog from '@/components/singleAd/EditAdDialog';

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

  if (!advertisement)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={1}
        width={1}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Fragment>
      <EditAdDialog advertisement={advertisement} />
      <Box>
        <Paper
          sx={{
            margin: 'auto',
            overflow: 'hidden',
            display: 'flex',
            gap: 2,
            padding: 2,
          }}
        >
          <Box display="flex" gap={4} flexWrap="wrap">
            <Box
              sx={{
                objectFit: 'cover',
                aspectRatio: 1,
                width: '400px',
                height: '400px',
              }}
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
      </Box>
    </Fragment>
  );
}
