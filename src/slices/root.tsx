import { combineReducers } from '@reduxjs/toolkit';
import advertisementsReducer from './advertisements';
import ordersReducer from './orders';

const rootReducer = combineReducers({
  advertisementsReducer,
  ordersReducer,
});

export default rootReducer;
