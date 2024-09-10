import { Order } from '../api/types';
import { RootState } from '../store/store';

const selectOrders = (state: RootState): Array<Order> =>
  state.ordersReducer.orders;

export { selectOrders };
