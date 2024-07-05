import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CounterStackParams } from './CounterStack';

type Props = NativeStackScreenProps<CounterStackParams, 'Counter'> & {
  counter: number;
  setCounter: (newValue: number) => void;
};

const CounterScreen = ({ navigation, counter, setCounter }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increase"
          onPress={() => setCounter(counter + 1)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Decrease"
          onPress={() => setCounter(counter - 1)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', { counter, setCounter })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default CounterScreen;
