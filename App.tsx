/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabScreen from './screens/BottomTab'
import ProfileScreen from './screens/ProfileScreen'; // You can add more screens as needed
import AuthStack from './screens/loginAuthFlow/AuthStack';

//const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AuthStack/>
    
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={BottomTabScreen} />
    //     <Drawer.Screen name="Profile" component={ProfileScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}




