import { Link } from '@mui/material';

export default function HomeButton() {
  return (
    <Link
      href="https://www.avito.ru/"
      variant="body2"
      sx={{
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover': {
          color: 'common.white',
        },
      }}
    >
      На главную
    </Link>
  );
}
