import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Grid from '@mui/material/Grid2';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditIcon from '@mui/icons-material/Edit';

export default function AdvertisementPage() {
  return (
    <Paper
      sx={{
        margin: 'auto',
        overflow: 'hidden',
        display: 'flex',
        gap: 2,
        padding: 2,
      }}
    >
      <Grid container>
        <Grid>
          <Box
            sx={{
              width: '500px',
              height: '500px',
            }}
            component="img"
            src={`https://ir.ozone.ru/s3/multimedia-1-j/wc1000/6971552791.jpg`}
            alt={'супер штука'}
          />
        </Grid>
        <Grid>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h5" component="h1">
              {`Финикойны. Батончики снеки для здорового перекуса, полезные сладости, финиковые конфеты, печенье без сахара, 2 коробки по 5 шт. в индивидуальной упаковке, вкус банан и кокос`}
            </Typography>
            <Box display="flex" gap={4}>
              <Box display="flex" gap={0.5} alignItems="center">
                <ThumbUpIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" fontSize={16}>
                  {'1212'}
                </Typography>
              </Box>
              <Box display="flex" gap={0.5} alignItems="center">
                <VisibilityIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2" fontSize={16}>
                  {'123123'}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h2" color="primary">
              {`₽3333`}
            </Typography>
            <Typography>
              "Стих для привлечения внимания: дама сдавала в багаж диван,
              чемодан, саквояж, картину, корзину, картонку и маленькую
              собачонку. выдали даме на станции четыре зеленых квитанции о том,
              что получен багаж: диван, чемодан, саквояж, картина, корзина,
              картонка и маленькая собачонка. вещи везут на перрон. кидают в
              открытый вагон. готово. уложен багаж: диван, чемодан, саквояж,
              картина, корзина, картонка и маленькая собачонка. но только
              раздался звонок, удрал из вагона щенок. хватились на станции дно:
              потеряно место одно. в испуге считают багаж: диван, чемодан,
              саквояж, картина, корзина, картонка… — товарищи! где собачонка?
              вдруг видят: стоит у колес огромный взъерошенный пес. поймали его
              — и в багаж, туда, где лежал саквояж, картина, корзина, картонка,
              где прежде была собачонка. приехали в город житомир. носильщик
              пятнадцатый номер везет на тележке багаж: диван, чемодан, саквояж,
              картину, корзину, картонку, а сзади ведут собачонку. собака-то как
              зарычит, а барыня как закричит: — разбойники! воры! уроды! собака
              — не той породы! швырнула она чемодан, ногой отпихнула диван,
              картину, корзину, картонку… — отдайте мою собачонку! — позвольте,
              мамаша! на станции, согласно багажной квитанции, от вас получили
              багаж: диван, чемодан, саквояж, картину, корзину, картонку и
              маленькую собачонку. однако за время пути собака могла подрасти!"
            </Typography>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Изменить объявление
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
