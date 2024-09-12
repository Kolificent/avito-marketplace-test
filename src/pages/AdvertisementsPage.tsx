import { Fragment } from 'react/jsx-runtime';
import {
  AdvertisementsGrid,
  NewAdDialog,
  AdsPagination,
  AdsFilters,
} from '@components/advertisements';
import { Box, Paper } from '@mui/material';

export default function AdvertisementsPage() {
  return (
    <Fragment>
      <NewAdDialog />
      <Box>
        <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
          <AdsFilters />
          <Box padding={2} gap={2} display="flex" flexDirection="column">
            <AdvertisementsGrid />
            <AdsPagination />
          </Box>
        </Paper>
      </Box>
    </Fragment>
  );
}
