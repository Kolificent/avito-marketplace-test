import AdsSearchField from './AdsSearchField';
import SelectAdsSort from './SelectAdsSort';
import NewAdButton from './NewAdButton';
import { AppBar, Grid, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function AdsFilters() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    >
      <Toolbar>
        <Grid container spacing={2} sx={{ alignItems: 'center', padding: 1 }}>
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
  );
}
