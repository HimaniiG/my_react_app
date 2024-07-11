import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StackType } from "./NavigationComponent";

type FirstScreenPropType = NativeStackScreenProps<StackType, "FirstScreen">;

const FirstScreen = (props: FirstScreenPropType) => {
  const { navigation, route } = props;
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  useEffect(() => {
    if (route.params?.selectedItems) {
      setSelectedItems(route.params.selectedItems);
    }
  }, [route.params?.selectedItems]);

  const goToSecondScreen = () => {
    navigation.navigate('SecondScreen', { selectedItems });
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.text} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.description}>
          {item.description.length > 50 ? item.description.substring(0, 50) + "..." : item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No items selected</Text>}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Second Screen"
          onPress={goToSecondScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginStart: 10,
    padding: 10,
    marginTop: 10,
    width: 'auto',
    marginEnd:55,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    marginTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
});

export default FirstScreen;
