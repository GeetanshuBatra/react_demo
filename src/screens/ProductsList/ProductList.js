import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {PRODUCT_DETAIL} from '../constants/constants';
import {useSelector} from 'react-redux';

const renderItem = (item, navigation) => {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(PRODUCT_DETAIL, {id: item.item.id})}>
      <Item product={item.item} />
    </TouchableOpacity>
  );
};

const stock = quantity => {
  if (quantity) {
    return quantity > 3 ? (
      <Text style={styles.itemStockText}>{quantity} items left!</Text>
    ) : (
      <Text style={styles.itemStockOutText}>
        Only {quantity} items left in Stock! Hurry Up.
      </Text>
    );
  } else {
    return <Text style={styles.itemStockOutText}>Out of Stock!</Text>;
  }
};

const Item = props => {
  return (
    <View>
      <Image style={styles.itemImage} source={props.product.image} />
      <Text style={styles.itemDetail}>{props.product.name}</Text>
      <Text style={styles.itemDetail}>$ {props.product.price}</Text>
      {stock(props.product.quantity)}
    </View>
  );
};

const ProductList = ({navigation}) => {
  const data = useSelector(state => state.products);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={item => renderItem(item, navigation)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductList;
