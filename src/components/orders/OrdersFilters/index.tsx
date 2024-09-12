import SelectOrdersStatus from './SelectOrdersStatus';
import SelectOrdersSort from './SelectOrdersSort';
import { AppBar, Grid2, Toolbar } from '@mui/material';

export default function OrdersFilters() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    >
      <Toolbar>
        <Grid2 container spacing={2} sx={{ alignItems: 'center', padding: 1 }}>
          <Grid2>
            <SelectOrdersStatus />
          </Grid2>
          <Grid2>
            <SelectOrdersSort />
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
}
