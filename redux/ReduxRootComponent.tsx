import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ReduxHeader from './ReduxHeader';
import ReduxProducts from './ReduxProducts';
import { getDataFromApi } from './Action';
import { RootState } from './RootReducer';
import { Item } from './CartActionTypes';

const ReduxRootComponent = () => {
  const dispatch = useDispatch();
  const dataFromApi = useSelector((state: RootState) => state.products);

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      const mappedData: Item[] = data.map((product: any) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        Image: product.image,
      }));
      dispatch(getDataFromApi(mappedData));
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataFromApi}
        renderItem={({ item }) => <ReduxProducts item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<ReduxHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ReduxRootComponent;
