import { DialogStatus } from '../constants/sliceDefaults';
import { RootState } from '../store/store';

const selectNewAdDialog = (state: RootState): DialogStatus =>
  state.newAdDialogReducer;
const selectEditAdDialog = (state: RootState): DialogStatus =>
  state.editAdDialogReducer;

export { selectNewAdDialog, selectEditAdDialog };
