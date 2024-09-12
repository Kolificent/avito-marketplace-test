import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { getTabById } from '@utils';
import { useLocation, useNavigate } from 'react-router-dom';

const itemStyle = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

interface TabItemProps {
  id: number;
}

export default function TabItem({ id }: TabItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const tab = getTabById(id);
  if (!tab) return;

  const isButtonSelected = location.pathname === `/${tab.route}`;
  return (
    <ListItem disablePadding key={id}>
      <ListItemButton
        selected={isButtonSelected}
        sx={itemStyle}
        disabled={id > 2}
        onClick={() => {
          navigate(tab.route);
        }}
      >
        <ListItemIcon>{tab.icon}</ListItemIcon>
        <ListItemText>{tab.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
