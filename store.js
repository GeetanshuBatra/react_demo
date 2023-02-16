import {createStore} from 'redux';
import productsReducer from './src/screens/ProductDetail/reducer';

const store = createStore(productsReducer);

export default store;
