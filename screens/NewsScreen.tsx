import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

type NewsCardType = {
  title :  string,
  description: string,
  image : string,
  id: string
}
const newsData = [
  {
    id: '1',
    title: 'Breaking News: React Native 0.65 Released',
    description: 'The latest version of React Native has been released with many improvements and new features.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'How to Use React Navigation',
    description: 'Learn how to navigate between different screens in a React Native app using React Navigation.',
    image: 'https://via.placeholder.com/150',
  },
];

const NewsCard = (prop : NewsCardType) => (
  <View style={styles.card}>
    <Image source={{ uri: prop.image }} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{prop.title}</Text>
      <Text style={styles.cardDescription}>{prop.description}</Text>
    </View>
  </View>
);

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsCard {...item} />}
        keyExtractor={(item) => item.id}
      />
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

export default NewsScreen;
