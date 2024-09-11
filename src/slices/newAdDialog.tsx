import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_DIALOG } from '../constants/sliceDefaults';

const newAdDialogSlice = createSlice({
  name: 'newAdDialog',
  initialState: DEFAULT_DIALOG,
  reducers: {
    openNewAdDialog: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closeNewAdDialog: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

const { actions, reducer: newAdDialogReducer } = newAdDialogSlice;
export const { openNewAdDialog, closeNewAdDialog } = actions;
export default newAdDialogReducer;
