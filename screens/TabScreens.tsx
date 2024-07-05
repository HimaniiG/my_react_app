import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from "./AboutScreen";
import DetailsScreen from "./Details";
import TopTabScreens from "./TopTabScreens";
import { stackScreens } from "./AllScreens";


const Tab = createBottomTabNavigator<stackScreens>();

const TabScreens = () => {
    return(
        <Tab.Navigator screenOptions={{
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'green',
                tabBarActiveBackgroundColor: 'lightblue',
                tabBarInactiveBackgroundColor:'pink',
                tabBarLabelStyle: {
                    fontSize:18,
                }
            }}>
                <Tab.Screen name='Home' component={HomeScreen}  
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="home" color="white" size={20} />
                    ),
                }}/>
                
                <Tab.Screen name='About' component={AboutScreen}
                 options={{
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="information-circle" color="white" size={20} />
                    ),
                }}/>
                
        
                <Tab.Screen name='Details' component={DetailsScreen}
                options={{
                    tabBarIcon: ({color,size}) => (
                        <Ionicons name="list" color="white" size={20} />
                    ),
                }}/>
    
            </Tab.Navigator>
    
    )
}

export default TabScreens;
