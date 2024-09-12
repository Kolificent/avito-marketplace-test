import { ChangeEvent, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch, useAppSelector } from '@store';
import { changeAdsQuery } from '@slices/advertisements';
import { selectQuery } from '@selectors/advertisements';
import { TextField } from '@mui/material';

export default function AdsSearchField() {
  const initialQuery = useAppSelector(selectQuery);
  const [tempQuery, setTempQuery] = useState(initialQuery);
  const dispatch = useAppDispatch();

  const debounceTime = 400;
  const debouncedSetQuery = useDebouncedCallback((value) => {
    dispatch(changeAdsQuery(value));
  }, debounceTime);

  useEffect(() => {
    setTempQuery(initialQuery);
  }, [initialQuery]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setTempQuery(input);
    debouncedSetQuery(input);
  }

  return (
    <TextField
      fullWidth
      value={tempQuery}
      onChange={handleChange}
      placeholder="Найти объявление"
      InputProps={{
        disableUnderline: true,
        sx: { fontSize: 'default' },
      }}
      variant="standard"
    />
  );
}
