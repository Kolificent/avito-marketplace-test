import { ORDER_STATUS_LABELS } from '../constants/orderStatusTitles';

export function getStatusLabel(id: keyof typeof ORDER_STATUS_LABELS) {
  return ORDER_STATUS_LABELS[id] || 'Неизвестный статус';
}
