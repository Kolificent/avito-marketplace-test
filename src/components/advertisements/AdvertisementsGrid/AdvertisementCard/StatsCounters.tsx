import { Fragment } from 'react';
import { Advertisment } from '@types';
import { Box, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface StatsCountersProps {
  views: Advertisment['views'];
  likes: Advertisment['likes'];
}

export default function StatsCounters({ views, likes }: StatsCountersProps) {
  const commonStyles = {
    position: 'absolute' as const,
    top: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '5px',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: 0.5,
  };

  return (
    <Fragment>
      <Box sx={{ ...commonStyles, left: 10 }}>
        <VisibilityIcon sx={{ fontSize: 10 }} />
        <Typography variant="body2" fontSize={10}>
          {views}
        </Typography>
      </Box>
      <Box sx={{ ...commonStyles, right: 10 }}>
        <ThumbUpIcon sx={{ fontSize: 10 }} />
        <Typography variant="body2" fontSize={10}>
          {likes}
        </Typography>
      </Box>
    </Fragment>
  );
}
