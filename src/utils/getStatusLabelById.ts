import { STATUS_FILTER_LABELS } from '@constants/statusFilterLabels';

export function getStatusLabelById(id: keyof typeof STATUS_FILTER_LABELS) {
  return STATUS_FILTER_LABELS.find((option) => option.id === id)?.label;
}
