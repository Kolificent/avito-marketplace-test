import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CATEGORIES } from '@constants/navigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTabById } from '@utils';
import AvitoLogo from '@assets/avito.svg';

const itemStyle = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategoryStyle = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={AvitoLogo} width="70%" />
      </Box>
      <List disablePadding>
        {CATEGORIES.map(({ id, name, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{name}</ListItemText>
            </ListItem>
            {children.map((childId) => {
              const tab = getTabById(childId);
              if (!tab) return;

              const isButtonSelected = location.pathname === `/${tab.route}`;
              return (
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    selected={isButtonSelected}
                    sx={itemStyle}
                    disabled={childId > 2}
                    onClick={() => {
                      navigate(tab.route);
                    }}
                  >
                    <ListItemIcon>{tab.icon}</ListItemIcon>
                    <ListItemText>{tab.name}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
