import CategoryItem from './CategoryItem';
import { Category } from '@types';
import { CATEGORIES } from '@constants/navigationConsts';
import AvitoLogo from '@assets/avito.svg';
import { Drawer, List, Box, DrawerProps } from '@mui/material';

export default function Navigator(props: DrawerProps) {
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
        {CATEGORIES.map((category: Category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </List>
    </Drawer>
  );
}
