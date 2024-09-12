import { Button } from '@mui/material';
import React from 'react';
import { NavigateBefore } from '@mui/icons-material';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigateBackButton() {
  const navigate = useNavigate();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <Button
      onClick={handleClick}
      startIcon={<NavigateBefore />}
      variant="contained"
    >
      Вернуться назад
    </Button>
  );
}
