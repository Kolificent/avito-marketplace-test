import { Category, Tab } from '@types';
import {
  People,
  Settings,
  Payments,
  CardTravel,
  Help,
  Logout,
  TrendingUp,
  AttachMoney,
  Grade,
} from '@mui/icons-material';

export const CATEGORIES: Array<Category> = [
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

export const TABS: Array<Tab> = [
  {
    id: 1,
    name: 'Объявления',
    icon: <Payments />,
    route: 'advertisements',
  },
  { id: 2, name: 'Заказы', icon: <CardTravel />, route: 'orders' },
  {
    id: 3,
    name: 'Рейтинг',
    icon: <Grade />,
    route: 'rating',
  },
  {
    id: 4,
    name: 'Продвижение',
    icon: <TrendingUp />,
    route: 'promotion',
  },
  { id: 5, name: 'Финансы', icon: <AttachMoney />, route: 'finance' },
  { id: 6, name: 'Отзывы', icon: <People />, route: 'reviews' },
  { id: 7, name: 'Настройки', icon: <Settings />, route: 'settings' },
  { id: 8, name: 'Поддержка', icon: <Help />, route: 'help' },
  { id: 9, name: 'Выйти', icon: <Logout />, route: 'logout' },
];
