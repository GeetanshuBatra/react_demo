import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';

const Item = product => {
  console.log('product...', product);
  return (
    <View style={styles.cartItem}>
      <Image style={styles.cartItemImage} source={product.item.image} />
      <Text>{product.item.name}</Text>
    </View>
  );
};

const MyCart = ({route, navigation}) => {
  return (
    <FlatList
      data={route.params.items}
      keyExtractor={item => item.id}
      renderItem={item => Item(item)}
      ListEmptyComponent={<Text>Cart is Empty!</Text>}
    />
  );
};

export default MyCart;
