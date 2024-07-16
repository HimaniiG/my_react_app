import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CounterStackParams } from './CounterStack';

type Props = NativeStackScreenProps<CounterStackParams, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { counter, setCounter } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
});

export default DetailsScreen;
