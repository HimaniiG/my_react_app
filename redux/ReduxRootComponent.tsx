import React from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import ReduxHeader from './ReduxHeader';
import ReduxProducts from './ReduxProducts';

const ReduxRootComponent = () => {

  const products = [
    {
        name:'Camera',
        color: 'black',
        price: 40000,
        Image:'https://i.ibb.co/1r28gMk/1.webp'

    },
    {
        name:'Camera 2',
        color: 'white',
        price: 50000,
        Image:'https://i.ibb.co/1r28gMk/1.webp'

    },
    {
        name:'Camera 3',
        color: 'green',
        price: 60000,
        Image:'https://i.ibb.co/1r28gMk/1.webp'

    },
    {
        name:'Camera 4',
        color: 'green',
        price: 90000,
        Image:'https://i.ibb.co/1r28gMk/1.webp'

    },
    {
        name:'Camera 5',
        color: 'green',
        price: 80000,
        Image:'https://i.ibb.co/1r28gMk/1.webp'

    }

  ]


  return (
    <View style={styles.container}>
      <ScrollView>
      <ReduxHeader/>

      {
        products.map((item) => <ReduxProducts item = {item}/>)
      }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent:'center'
  },
});

export default ReduxRootComponent;
