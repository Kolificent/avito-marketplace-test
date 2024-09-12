import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import AdvertisementsGrid from '@/components/advertisements/AdvertisementsGrid';
import { Box } from '@mui/material';
import SelectAdsSort from '@/components/advertisements/SelectAdsSort';
import AdsSearchField from '@/components/advertisements/AdsSearchField';
import NewAdButton from '@/components/advertisements/NewAdButton';
import { Fragment } from 'react/jsx-runtime';
import NewAdDialog from '@/components/advertisements/NewAdDialog';
import AdsPagination from '@/components/advertisements/AdsPagination';

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
                  <SelectAdsSort />
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
