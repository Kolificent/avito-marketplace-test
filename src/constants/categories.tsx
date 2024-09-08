import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentsIcon from '@mui/icons-material/Payments';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GradeIcon from '@mui/icons-material/Grade';

export const categories = [
  {
    id: 1,
    name: 'Панель управления',
    children: [1, 2],
  },
  {
    id: 2,
    name: 'Аналитика',
    children: [3, 4, 5, 6],
  },
  {
    id: 3,
    name: 'ИП Иван Иванов Иванович',
    children: [7, 8, 9],
  },
];

export const tabs = [
  {
    id: 1,
    name: 'Объявления',
    icon: <PaymentsIcon />,
    route: 'advertisements',
  },
  { id: 2, name: 'Заказы', icon: <CardTravelIcon />, route: 'orders' },
  {
    id: 3,
    name: 'Рейтинг',
    icon: <GradeIcon />,
    route: 'rating',
  },
  {
    id: 4,
    name: 'Продвижение',
    icon: <TrendingUpIcon />,
    route: 'promotion',
  },
  { id: 5, name: 'Финансы', icon: <AttachMoneyIcon />, route: 'finance' },
  { id: 6, name: 'Отзывы', icon: <PeopleIcon />, route: 'reviews' },
  { id: 7, name: 'Настройки', icon: <SettingsIcon />, route: 'settings' },
  { id: 8, name: 'Поддержка', icon: <HelpIcon />, route: 'help' },
  { id: 9, name: 'Выйти', icon: <LogoutIcon />, route: 'logout' },
];
