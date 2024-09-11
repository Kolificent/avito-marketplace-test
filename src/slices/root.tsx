import { combineReducers } from '@reduxjs/toolkit';
import advertisementsReducer from './advertisements';
import ordersReducer from './orders';
import newAdDialogReducer from './newAdDialog';
import editAdDialogReducer from './editAdDialog';

const rootReducer = combineReducers({
  advertisementsReducer,
  ordersReducer,
  newAdDialogReducer,
  editAdDialogReducer,
});

export default rootReducer;
