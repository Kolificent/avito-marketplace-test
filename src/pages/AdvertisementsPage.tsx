import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AdvertisementGrid from '../components/AdvertisementsPage/AdvertisementGrid/AdvertisementGrid';
import CustomPagination from '../components/AdvertisementsPage/CustomPagination/CustomPagination';
import { Box, Fab } from '@mui/material';
import SelectSort from '../components/AdvertisementsPage/SelectSort';

export default function AdvertisementsPage() {
  return (
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
                <TextField
                  fullWidth
                  placeholder="Найти объявление"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: 'default' },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <SelectSort />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box padding={2} gap={2} display="flex" flexDirection="column">
          <AdvertisementGrid />
          <CustomPagination />
        </Box>
      </Paper>
      <Fab variant="extended" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Добавить объявление
      </Fab>
    </Box>
  );
}
