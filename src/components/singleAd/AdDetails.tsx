import { useState } from 'react';
import type { Advertisment } from '@types';
import { Box, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface AdDetailsProps {
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

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
      <Typography variant="h2" fontSize="2em" color="primary">
        <strong>{`₽${price}`}</strong>
      </Typography>
      {description && (
        <Typography>
          {isExpanded || description.length <= 100
            ? description
            : `${description.slice(0, 100)}...`}
          {description.length > 100 && (
            <Button
              size="small"
              variant="contained"
              onClick={handleToggleDescription}
            >
              {isExpanded ? 'Скрыть' : 'Ещё'}
            </Button>
          )}
        </Typography>
      )}
    </Box>
  );
}
