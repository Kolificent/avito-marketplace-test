import { ReactNode } from 'react';
import { AppBar, Toolbar } from '@mui/material';

interface PageBarProps {
  children: ReactNode;
}

export default function PageBar({ children }: PageBarProps) {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}
