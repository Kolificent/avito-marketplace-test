import SelectOrdersStatus from './SelectOrdersStatus';
import SelectOrdersSort from './SelectOrdersSort';
import { Grid2 } from '@mui/material';
import PageBar from '@components/ui/PageBar';

export default function OrdersFilters() {
  return (
    <PageBar>
      <Grid2 container spacing={2} sx={{ alignItems: 'center', padding: 1 }}>
        <Grid2>
          <SelectOrdersStatus />
        </Grid2>
        <Grid2>
          <SelectOrdersSort />
        </Grid2>
      </Grid2>
    </PageBar>
  );
}
