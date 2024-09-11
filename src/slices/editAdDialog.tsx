import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_DIALOG } from '../constants/sliceDefaults';

const editAdDialogSlice = createSlice({
  name: 'editAdDialog',
  initialState: DEFAULT_DIALOG,
  reducers: {
    openEditAdDialog: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closeEditAdDialog: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

const { actions, reducer: editAdDialogReducer } = editAdDialogSlice;
export const { openEditAdDialog, closeEditAdDialog } = actions;
export default editAdDialogReducer;
