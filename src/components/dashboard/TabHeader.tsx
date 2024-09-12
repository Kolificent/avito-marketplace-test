import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { TABS } from '@constants/navigation';

export default function TabHeader() {
  const location = useLocation();
  const tabInfo = TABS.find((tab) => `/${tab.route}` === location.pathname);
  if (!tabInfo) return null;
  return (
    <AppBar
      component="div"
      color="primary"
      position="static"
      elevation={0}
      sx={{ zIndex: 0, padding: 2 }}
    >
      <Toolbar>
        <Typography color="inherit" variant="h5" component="h1">
          {tabInfo.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
