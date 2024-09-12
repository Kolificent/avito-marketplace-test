import { ReactNode } from 'react';

// В названии грамматическая ошибка, но по условию менять контракты нельзя...
type Advertisment = {
  /* Уникальный идентификатор. */
  id: string;
  /* Название. */
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Дата и время создания. */
  createdAt: string;
  /* Количество просмотров. */
  views: number;
  /* Количество лайков. */
  likes: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
} as const;

type OrderItem = Advertisment & { count: number };

type Order = {
  /* Уникальный идентификатор. */
  id: string;
  /* Статус. */
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  /* Дата и время создания. */
  createdAt: string;
  /* Дата и время завершения. */
  finishedAt?: string;
  /* Товары в заказе. */
  items: Array<OrderItem>;
  /* Способ доставки(Почта, СДЭК...) */
  deliveryWay: string;
  /* Сумма заказа */
  total: number;
};

type Image = {
  /* Уникальный идентификатор. */
  id: number;
  /* Ссылка. */
  url: string;
  /* Название. */
  name: string;
};

export type { Advertisment, OrderItem, Order, Image };
export { OrderStatus };

// Далее идут контракты, что не были даны по условию

interface Category {
  id: number;
  name: string;
  children: Array<number>;
}

interface StatusLabel {
  id: number;
  label: string;
}

interface Tab {
  id: number;
  name: string;
  icon: ReactNode;
  route: string;
}

interface SortOptions {
  id: number;
  name: string;
  label: string;
}

interface AdvertisementsInfo {
  advertisements: Array<Advertisment>;
  pagination: ItemsPagination;
  sort: SortOptions['id'];
  query: Advertisment['name'];
  isLoading: boolean;
  error: string | null;
}

interface OrdersInfo {
  orders: Array<Order>;
  pagination: ItemsPagination;
  statusFilter: Order['status'] | 7;
  sort: SortOptions['id'];
  isLoading: boolean;
  error: string | null;
}

interface ItemsPagination {
  currentPage: number;
  maxPage: number;
  pageCount: number;
}

interface DialogStatus {
  isOpen: boolean;
}

export type {
  Category,
  Tab,
  ItemsPagination,
  StatusLabel,
  AdvertisementsInfo,
  OrdersInfo,
  DialogStatus,
  SortOptions,
};
