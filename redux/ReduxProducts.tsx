import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './Action';
import { RootState } from './RootReducer';
import { Item } from './CartActionTypes';

export type ReduxProductsProps = {
  item: Item;
};

const ReduxProducts: React.FC<ReduxProductsProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: Item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart(item));
  };

  useEffect(() => {
    const result = cartItems.find((element) => element.id === item.id);
    setIsAdded(!!result);
  }, [cartItems, item.id]);

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.Image }} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Price: {item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {isAdded ? (
          <Button title="Remove" onPress={() => handleRemoveFromCart(item)} />
        ) : (
          <Button title="Add" onPress={() => handleAddToCart(item)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
  },
  image: {
    height: 100,
    width: 100,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    marginLeft: 10,
  },
});

export default ReduxProducts;
