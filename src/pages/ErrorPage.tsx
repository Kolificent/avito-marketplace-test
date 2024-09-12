import NavigateBackButton from '@ui/NavigateBackButton';
import { Box, CssBaseline, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <CssBaseline />
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h1" color="primary">
          404
        </Typography>
        <Typography variant="h2" component="h1" align="center">
          Такой страницы не существует!
        </Typography>
        <NavigateBackButton />
        <Typography variant="caption">
          куда-то совсем не туда забрели...
        </Typography>
      </Box>
    </Box>
  );
}
