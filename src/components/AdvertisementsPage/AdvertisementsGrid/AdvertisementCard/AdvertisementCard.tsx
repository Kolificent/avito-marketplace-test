import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface AdvertisementCardProps {
  title: string;
  image: string;
  price: number;
  views: number;
  likes: number;
}

export default function AdvertisementCard({
  title,
  image,
  price,
  views,
  likes,
}: AdvertisementCardProps) {
  return (
    <Card sx={{ width: 182 }}>
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
        <CardMedia component="img" height="182" image={image} alt={title} />
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
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
