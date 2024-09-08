import { AppBar, Box, Button, Toolbar } from '@mui/material';
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
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding={1}
        >
          <SelectStatus />
          <SelectSort />
          <Button variant="contained" sx={{ mr: 1 }}>
            Add user
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
