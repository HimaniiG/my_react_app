import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabScreen from '../BottomTab';
import OnboardingScreen from './OnboardingScreen';
import { RootStackParamList } from './OnboardingScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={OnboardingScreen}  options={{headerShown:false}}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='BottomTab' component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
