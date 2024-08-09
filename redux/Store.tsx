import {  configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';
import { legacy_createStore as createStore } from 'redux';



const store = configureStore({
  reducer: rootReducer,
  
});


export default store;

