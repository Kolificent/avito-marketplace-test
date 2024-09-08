import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from '../components/dashboard/Navigator';
import Header from '../components/dashboard/Header';
import HomePage from '../pages/AdvertisementsPage';
import { theme } from './theme';
import ProjectInfo from '../components/ProjectInfo';
import { Outlet } from 'react-router-dom';

const drawerWidth = 256;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTabId, setSelectedTabId] = useState(1);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm')); // для адаптации под мобильные устройства

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
          >
            <Outlet />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <ProjectInfo />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
