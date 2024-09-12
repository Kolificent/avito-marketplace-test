import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Skeleton,
  CircularProgress,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';
import { Advertisment } from '@types';
import { useState } from 'react';

interface AdvertisementCardProps {
  id: Advertisment['id'];
  name: Advertisment['name'];
  image: Advertisment['imageUrl'];
  price: Advertisment['price'];
  views: Advertisment['views'];
  likes: Advertisment['likes'];
}

export default function AdvertisementCard({
  id,
  name,
  image,
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
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '5px',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <VisibilityIcon sx={{ fontSize: 10 }} />
            <Typography variant="body2" fontSize={10}>
              {views}
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              padding: '5px',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <ThumbUpIcon sx={{ fontSize: 10 }} />
            <Typography variant="body2" fontSize={10}>
              {likes}
            </Typography>
          </Box>
          {loading && (
            <CardMedia
              sx={{
                height: '182px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress />
            </CardMedia>
          )}
          <CardMedia
            component="img"
            height="182"
            image={image}
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
                WebkitLineClamp: 2, // Указываем количество строк
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
