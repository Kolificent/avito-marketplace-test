import * as React from 'react';
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import HomeButton from './HomeButton';

interface MainHeaderProps {
  onDrawerToggle: () => void;
}

export default function MainHeader(props: MainHeaderProps) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} sx={{ alignItems: 'center' }}>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton color="inherit" onClick={onDrawerToggle} edge="start">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <HomeButton />
            </Grid>
            <Grid item>
              <Tooltip title="Нет уведомлений">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton disabled color="inherit" sx={{ p: 0.5 }}>
                <Avatar />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
