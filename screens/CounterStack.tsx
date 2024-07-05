import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from './CounterScreen';
import DetailsScreen from './Details';

export type CounterStackParams = {
  Counter: undefined;
  Details: { counter: number; setCounter: (newValue: number) => void };
};

const Stack = createNativeStackNavigator<CounterStackParams>();

const CounterStack = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Stack.Navigator initialRouteName="Counter">
      <Stack.Screen name="Counter" options={{ headerShown: false }}>
        {(props) => (
          <CounterScreen {...props} counter={counter} setCounter={setCounter} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Details" options={{ headerShown: false }}>
        {(props) => (
          <DetailsScreen 
            {...props} 
            route={{...props.route, params: { counter, setCounter }}} 
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CounterStack;
