import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ProjectInfo() {
  return (
    <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
      {'Тестовое задание для Авито Frontend 2024 - '}
      <Link
        color="inherit"
        href="https://github.com/Kolificent/avito-marketplace-test"
      >
        {'Github'}
      </Link>{' '}
      <Link
        color="inherit"
        href="https://github.com/Kolificent/avito-marketplace-test"
      >
        {'GitVerse ДОБАВИТЬ'}
      </Link>
    </Typography>
  );
}
