import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import CheckBox from 'react-native-check-box';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackType } from './NavigationComponent';

const dummyData = [
  {
    id: '1',
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    id: '2',
    title: "Mens Casual Premium Slim Fit T-Shirts",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    id: '3',
    title: "Mens Cotton Jacket",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  }
];

type SecondScreenPropType = NativeStackScreenProps<StackType, 'SecondScreen'>;

export default function SecondScreen({ navigation, route }: SecondScreenPropType) {
  const [selectedItems, setSelectedItems] = useState<string[]>(route.params?.selectedItems || []);

  const toggleSelection = (id: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const renderItem = ({ item }: { item: { id: string; title: string; image: string; description: string } }) => (
    <View style={styles.card}>
      <CheckBox
        isChecked={selectedItems.includes(item.id)}
        onClick={() => toggleSelection(item.id)}
      />
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.text}>
        {item.title}
        </Text>
        <Text style={styles.description}>
          {item.description.length > 50 ? item.description.substring(0, 50) + "..." : item.description}
        </Text>
      </View>
    </View>
  );

  const confirmSelection = () => {
    const selectedData = dummyData.filter(item => selectedItems.includes(item.id));
    navigation.navigate('FirstScreen', { selectedItems: selectedData });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
      <Button
        title="Confirm Selection"
        onPress={confirmSelection}
      />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginEnd: 10,
    padding: 10,
    marginTop: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
  },
  description: {
    fontSize: 12,
    marginTop: 10,
    flexShrink: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
});