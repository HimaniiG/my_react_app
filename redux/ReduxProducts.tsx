// ReduxProducts.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './Action'
import { RootState } from './RootReducer';
import { Item } from './CartActionTypes';

export type ReduxProductsProps = {
  item: Item;
};

const ReduxProducts: React.FC<ReduxProductsProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: Item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart(item));
  };

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === item.name
    })
    if(result.length){
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [cartItems]);

  return (
    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <Text style={{ fontSize: 24 }}> {item.name} </Text>
      <Text style={{ fontSize: 24 }}> {item.price} </Text>
      <Text style={{ fontSize: 24 }}> {item.color} </Text>
      <Image style={{ height: 100, width: 100 }} source={{ uri: item.Image }} />
      {isAdded ? (
        <Button title="Remove from cart" onPress={() => handleRemoveFromCart(item)} />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

export default ReduxProducts;
