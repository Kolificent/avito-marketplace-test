import TabItem from './TabItem';
import { Category } from '@types';
import { Box, Divider, ListItem, ListItemText } from '@mui/material';

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Box key={category.id} sx={{ bgcolor: '#101F33' }}>
      <ListItem sx={{ py: 2, px: 3 }}>
        <ListItemText sx={{ color: '#fff' }}>{category.name}</ListItemText>
      </ListItem>
      {category.children.map((childId) => (
        <TabItem id={childId} key={childId} />
      ))}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}
