import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Item {
  id: number;
  label: string;
}

interface CustomSelectProps {
  selectLabel: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  items: Array<Item>;
}

export default function CustomSelect({
  selectLabel,
  value,
  onChange,
  items,
}: CustomSelectProps) {
  return (
    <Box display="flex" alignItems="center" gap={1} minWidth={200}>
      <FormControl fullWidth size="small">
        <InputLabel>{selectLabel}</InputLabel>
        <Select label={selectLabel} value={value} onChange={onChange}>
          {items.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
