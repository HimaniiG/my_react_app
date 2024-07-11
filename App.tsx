/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from './screens/Details';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreens from './screens/AllScreens';
import TabScreens from './screens/TabScreens';
import TopTabScreens from './screens/TopTabScreens';
import Product from './flatlist_with_api/Products';
import Products from './flatlist_with_api/Products';
import Demo from './forms/Demo';
import Search from './hooks/Search';
import UseCallback from './hooks/UseCallback';
import UseRef from './hooks/UseRef';
import NavigationComponent from './assignment2/NavigationComponent';


export default function App() {
    return (
      <NavigationComponent/>
    );
}

// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import DetailsScreen from './screens/Details';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NewsScreen from './screens/NewsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import CounterScreen from './screens/CounterScreen';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';

// export type ScreenTypeList = {
//   Counter: undefined;
//   Details: { counter: number };
//   News : undefined;
//   Profile: undefined
// };

// const Stack = createStackNavigator<ScreenTypeList>();

// const BottomTab = createBottomTabNavigator<ScreenTypeList>();


// export default function App() {
//   const [counter, setCounter] = useState<number>(0);

//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator>
//         <BottomTab.Screen name="Counter">
//           {(props) => (
//             <CounterScreen {...props} counter={counter} setCounter={setCounter} />
//           )}
//         </BottomTab.Screen>
//         <BottomTab.Screen name="Details">
//           {(props) => (
//             <DetailsScreen {...props} counter={counter} setCounter={setCounter} />
//           )}
//         </BottomTab.Screen>
//         <BottomTab.Screen name='News' component={NewsScreen} />
//         <BottomTab.Screen name='Profile' component={ProfileScreen} />

//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// }

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NewsScreen from './screens/NewsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import CounterStack from './screens/CounterStack';

// export type ScreenTypeList = {
//   News: undefined;
//   Profile: undefined;
//   CounterStack: undefined;
// };

// const BottomTab = createBottomTabNavigator<ScreenTypeList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator>
//         <BottomTab.Screen
//           name="CounterStack"
//           component={CounterStack}
//         />
//         <BottomTab.Screen name="News" component={NewsScreen} />
//         <BottomTab.Screen name="Profile" component={ProfileScreen} />
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// }

