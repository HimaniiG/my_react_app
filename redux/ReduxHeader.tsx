import { RootState } from './RootReducer';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ReduxHeader = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={{ borderRadius: 15, fontSize: 24, textAlign: 'right', padding: 10 }}>
        {cartItems}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default ReduxHeader;
