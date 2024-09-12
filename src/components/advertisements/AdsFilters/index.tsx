import AdsSearchField from './AdsSearchField';
import SelectAdsSort from './SelectAdsSort';
import NewAdButton from './NewAdButton';
import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PageBar from '@components/ui/PageBar';

export default function AdsFilters() {
  return (
    <PageBar>
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
    </PageBar>
  );
}
