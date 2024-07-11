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
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.cardDescription}>
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
      <View >
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
      padding: 16,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 150,
    },
    cardContent: {
      padding: 16,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardDescription: {
      fontSize: 14,
      marginTop: 8,
    },
  });

export default FirstScreen;
