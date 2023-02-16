import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import {styles} from './styles';
//import productsReducer from './reducer';
//import {initialItems} from './reducer';
//import {useReducer} from 'react';
import {PRODUCT_CART} from '../constants/constants';
//import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, buyItem, removeFromCart} from './action';

const ProductDetail = ({route, navigation}) => {
  const itemId = route.params.id;
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [quantity, setQuantity] = useState();
  // const [itemList, dispatch] = useReducer(productsReducer, initialItems);
  const productItem = data.products.find(product => product.id === itemId);

  const addItem = () => {
    if (productItem.inCart) {
      Alert.alert('Alert', ' Item already in cart', [
        {text: 'Cancel', onPress: () => console.log('ok')},
        {text: 'Remove', onPress: () => removeItemFromCart(productItem.id)},
      ]);
    } else {
      dispatch(addToCart(productItem.id));
      //dispatch({type: ADD_TO_CART, id: productItem.id});
      Alert.alert('', 'Item Added to Cart', [
        {text: 'OK', onPress: () => console.log('ok')},
      ]);
    }
  };

  const goToCart = () => {
    const cartItems = data.products.filter(item => {
      if (item.inCart) {
        return item;
      }
    });
    navigation.navigate(PRODUCT_CART, {items: cartItems});
  };

  const removeItemFromCart = id => {
    dispatch(removeFromCart(id));
  };

  const buy = () => {
    setModalVisibility(true);
  };

  const proceedToBuy = () => {
    if (quantity > 0) {
      if (productItem.quantity >= quantity) {
        setModalVisibility(false);
        Alert.alert(
          'Thanks',
          'Item removed from your cart & will dispatch soon!',
          [
            {
              text: 'OK',
              onPress: () => {
                dispatch(buyItem(quantity, productItem.id));
                setQuantity();
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Alert',
          `only ${productItem.quantity} items are in stock`,
          [
            {
              text: 'OK',
              onPress: () => {
                console.log('Ok');
              },
            },
          ],
        );
      }
    } else {
      Alert.alert('FYI', 'Please enter some correct quantity to buy.', [
        {
          text: 'OK',
          onPress: () => {
            console.log('Ok');
          },
        },
      ]);
    }
  };

  return (
    <ScrollView>
      <View>
        <Image source={productItem.image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{productItem.name}</Text>
        <Text style={styles.itemText}>Price: ${productItem.price}</Text>
        <Text style={styles.itemText}>{productItem.description}</Text>
        <Text style={styles.itemText}>
          In Stock: {productItem.quantity} items
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.7}
            onPress={() => buy()}>
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.7}
            onPress={() => addItem()}>
            {productItem.inCart ? (
              <Text style={styles.buttonText}>Already In Cart (Remove)</Text>
            ) : (
              <Text style={styles.buttonText}>Add to cart</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => goToCart()}>
            <Text style={styles.buttonText}>Go To Cart</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisibility}
          onRequestClose={() => {
            setModalVisibility(!modalVisibility);
          }}>
          <View style={styles.modal}>
            <View style={styles.modalForm}>
              <TextInput
                multiline
                style={styles.editField}
                placeholder="Enter Quantity..."
                onChangeText={text => setQuantity(text)}
                value={quantity}
              />
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => proceedToBuy()}>
                <Text style={styles.buttonText}>Proceed to buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
