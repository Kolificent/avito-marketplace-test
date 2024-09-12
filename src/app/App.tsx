import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { theme } from './theme';
import {
  MainHeader,
  ProjectInfo,
  TabNameHeader,
  Navigator,
} from '@components/dashboard';
import { ThemeProvider, CssBaseline, useMediaQuery, Box } from '@mui/material';

const drawerWidth = 256;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // для адаптации под мобильные устройства
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
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
          <MainHeader onDrawerToggle={handleDrawerToggle} />
          <TabNameHeader />
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
