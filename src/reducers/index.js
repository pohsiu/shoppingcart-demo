import { combineReducers } from 'redux';
import cart from './cart';
import creditCard from './creditCard';

export default combineReducers({
  cart,
  creditCard,
})