import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';
import { TABS } from '../../constants/navigation';

export default function TabHeader() {
  const location = useLocation();
  const tab = TABS.find((tab) => `/${tab.route}` === location.pathname);
  if (!tab) return null;
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
          {tab.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
