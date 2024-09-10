import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import AdvertisementCard from './AdvertisementCard/AdvertisementCard';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  selectCurrentPage,
  selectAdvertisements,
  selectPageCount,
  selectSort,
  selectQuery,
} from '../../../selectors/advertisementsSelector';
import { updateAdvertisements } from '../../../slices/advertisements';

export default function AdvertisementsGrid() {
  const dispatch = useAppDispatch();
  const advertisements = useAppSelector(selectAdvertisements);
  const currentPage = useAppSelector(selectCurrentPage);
  const sort = useAppSelector(selectSort);
  const pageCount = useAppSelector(selectPageCount);
  const query = useAppSelector(selectQuery);

  useEffect(() => {
    dispatch(updateAdvertisements());
  }, [currentPage, pageCount, sort, query, dispatch]);
  if (!advertisements) return null;
  return (
    <Grid container spacing={2}>
      {advertisements.map((ad) => {
        return (
          <Grid key={ad.id}>
            <AdvertisementCard
              title={ad.name}
              image={ad.imageUrl ? ad.imageUrl : ''}
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
