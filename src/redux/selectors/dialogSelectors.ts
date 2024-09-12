import { DialogStatus } from '../../constants/slicesDefaults';
import { RootState } from '../store';

const selectNewAdDialog = (state: RootState): DialogStatus =>
  state.newAdDialogReducer;
const selectEditAdDialog = (state: RootState): DialogStatus =>
  state.editAdDialogReducer;

export { selectNewAdDialog, selectEditAdDialog };
