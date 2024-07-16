import { combineReducers } from 'redux';
import { reducer } from './Reducer';

const rootReducer = combineReducers({
  reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
