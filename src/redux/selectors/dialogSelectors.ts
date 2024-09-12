import { RootState } from '@store';
import type { DialogStatus } from '@types';

const selectNewAdDialog = (state: RootState): DialogStatus =>
  state.newAdDialogReducer;
const selectEditAdDialog = (state: RootState): DialogStatus =>
  state.editAdDialogReducer;

export { selectNewAdDialog, selectEditAdDialog };
