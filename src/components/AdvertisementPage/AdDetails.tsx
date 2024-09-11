import { Box, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Advertisment } from '../../api/types';

export interface AdDetailsProps {
  title: Advertisment['name'];
  likes: Advertisment['likes'];
  views: Advertisment['views'];
  price: Advertisment['price'];
  description?: Advertisment['description'];
}

export default function AdDetails({
  title,
  likes,
  views,
  price,
  description,
}: AdDetailsProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box display="flex" gap={4}>
        <Box display="flex" gap={0.5} alignItems="center">
          <ThumbUpIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2" fontSize={16}>
            {likes}
          </Typography>
        </Box>
        <Box display="flex" gap={0.5} alignItems="center">
          <VisibilityIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2" fontSize={16}>
            {views}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h2" color="primary">
        {`₽${price}`}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}
