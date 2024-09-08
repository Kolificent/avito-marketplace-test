import { OrderStatus } from '../api/types';

export const OrderStatusLabels = {
  [OrderStatus.Created]: 'Создан',
  [OrderStatus.Paid]: 'Оплачен',
  [OrderStatus.Transport]: 'В транспорте',
  [OrderStatus.DeliveredToThePoint]: 'Доставлен в пункт',
  [OrderStatus.Received]: 'Получен',
  [OrderStatus.Archived]: 'Архивирован',
  [OrderStatus.Refund]: 'Возврат',
} as const;
