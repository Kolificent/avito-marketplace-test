import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import AdvertisementCard from './AdvertisementCard';
import { useAppDispatch, useAppSelector } from '@store';
import {
  selectAdsCurrentPage,
  selectAdvertisements,
  selectAdsPageCount,
  selectAdsSort,
  selectQuery,
  selectAdsLoading,
  selectAdsError,
} from '@selectors/advertisements';
import { updateAdvertisements } from '@slices/advertisements';
import { Box, CircularProgress } from '@mui/material';

export default function AdvertisementsGrid() {
  const dispatch = useAppDispatch();
  const advertisements = useAppSelector(selectAdvertisements);
  const currentPage = useAppSelector(selectAdsCurrentPage);
  const sort = useAppSelector(selectAdsSort);
  const pageCount = useAppSelector(selectAdsPageCount);
  const query = useAppSelector(selectQuery);
  const isLoading = useAppSelector(selectAdsLoading);
  const error = useAppSelector(selectAdsError);

  useEffect(() => {
    dispatch(updateAdvertisements());
  }, [currentPage, pageCount, sort, query, dispatch]);

  if (isLoading || error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={1}
        width={1}
        padding={8}
        gap={3}
        flexDirection="column"
      >
        <CircularProgress />
        {error}
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {advertisements.map((ad) => {
        return (
          <Grid key={ad.id}>
            <AdvertisementCard
              id={ad.id}
              name={ad.name}
              imageUrl={ad.imageUrl}
              price={ad.price}
              views={ad.views}
              likes={ad.likes}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
