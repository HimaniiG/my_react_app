import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import CounterStack from './CounterStack';

export type ScreenTypeList = {
  News: undefined;
  Profile: undefined;
  CounterStack: undefined;
};

const BottomTab = createBottomTabNavigator<ScreenTypeList>();

export default function BottomTabScreen() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="CounterStack"
          component={CounterStack}
        />
        <BottomTab.Screen name="News" component={NewsScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

