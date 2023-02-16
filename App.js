import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductsList/index';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetail from './src/screens/ProductDetail/index';
import MyCart from './src/screens/cart/index';
import store from './store';
import {Provider} from 'react-redux';
import {
  PRODUCT_CART,
  PRODUCT_DETAIL,
  PRODUCT_LIST,
} from './src/screens/constants/constants';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={PRODUCT_LIST}>
          <Stack.Screen
            name={PRODUCT_LIST}
            component={ProductList}
            options={{title: 'React Shopping'}}
          />
          <Stack.Screen
            name={PRODUCT_DETAIL}
            component={ProductDetail}
            options={{title: 'Detail'}}
          />
          <Stack.Screen
            name={PRODUCT_CART}
            component={MyCart}
            options={{title: 'Cart'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
