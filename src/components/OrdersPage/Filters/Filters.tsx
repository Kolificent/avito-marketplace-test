import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import SelectStatus from './SelectStatus';
import SelectSort from './SelectSort';

export default function Filters() {
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
            <SelectStatus />
          </Grid>
          <Grid item>
            <SelectSort />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
