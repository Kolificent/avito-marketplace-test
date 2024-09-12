import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { Advertisment } from '@types';
import { useState } from 'react';
import StatsCounters from './StatsCounters';

interface AdvertisementCardProps {
  id: Advertisment['id'];
  name: Advertisment['name'];
  imageUrl: Advertisment['imageUrl'];
  price: Advertisment['price'];
  views: Advertisment['views'];
  likes: Advertisment['likes'];
}

export default function AdvertisementCard({
  id,
  name,
  imageUrl,
  price,
  views,
  likes,
}: AdvertisementCardProps) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Card sx={{ width: 182 }}>
      <Link
        to={`/advertisement/${id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardActionArea>
          <StatsCounters views={views} likes={likes} />
          {loading && (
            <CardMedia
              sx={{
                height: '182px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {imageUrl ? <CircularProgress /> : 'Нет изображения'}
            </CardMedia>
          )}
          <CardMedia
            component="img"
            height="182"
            image={imageUrl}
            alt={name}
            style={{ display: loading ? 'none' : 'block' }}
            onLoad={handleImageLoad}
          />
          <CardContent sx={{ padding: 1 }}>
            <Typography variant="h6" color="primary">
              {`₽${price}`}
            </Typography>
            <Typography
              variant="h6"
              fontSize={14}
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
              }}
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
