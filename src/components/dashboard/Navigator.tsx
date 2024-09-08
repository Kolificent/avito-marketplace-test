import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { categories } from '../../constants/categories';
import { useNavigate } from 'react-router-dom';
import { getTabById } from '../../utils/getTabById';

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
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{
            ...itemStyle,
            ...itemCategoryStyle,
            fontSize: 22,
            color: '#fff',
          }}
        >
          Авито
        </ListItem>
        {categories.map(({ id, name, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{name}</ListItemText>
            </ListItem>
            {children.map((childId) => {
              const tab = getTabById(childId);
              if (!tab) return;
              return (
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    selected={true}
                    sx={itemStyle}
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
