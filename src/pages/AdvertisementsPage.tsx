import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import AdvertisementsGrid from '../components/AdvertisementsPage/AdvertisementsGrid/AdvertisementsGrid';
import AdsPagination from '@/components/AdvertisementsPage/AdsPagination';
import { Box } from '@mui/material';
import SelectSort from '../components/AdvertisementsPage/SelectSort';
import AdsSearchField from '../components/AdvertisementsPage/AdsSearchField';
import NewAdButton from '../components/AdvertisementsPage/NewAdButton';
import { Fragment } from 'react/jsx-runtime';
import NewAdDialog from '../components/AdvertisementsPage/NewAdDialog';

export default function AdvertisementsPage() {
  return (
    <Fragment>
      <NewAdDialog />
      <Box>
        <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
          >
            <Toolbar>
              <Grid
                container
                spacing={2}
                sx={{ alignItems: 'center', padding: 1 }}
              >
                <Grid item>
                  <SearchIcon color="inherit" sx={{ display: 'block' }} />
                </Grid>
                <Grid item xs>
                  <AdsSearchField />
                </Grid>
                <Grid item>
                  <SelectSort />
                </Grid>
                <Grid item>
                  <NewAdButton />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Box padding={2} gap={2} display="flex" flexDirection="column">
            <AdvertisementsGrid />
            <AdsPagination />
          </Box>
        </Paper>
      </Box>
    </Fragment>
  );
}
