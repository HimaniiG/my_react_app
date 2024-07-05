import React from "react";
import {View,Text, Pressable, Alert} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import DetailsScreen from "./Details";


export type stackScreens = {
    Home: undefined,
    About : {msg : string},
    Details: {msg2 : string},
}
const Stack = createNativeStackNavigator<stackScreens>();

const AllScreens = () => {
    return(
            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeScreen} 
                
                // options={{
                //    title: "Welcome Home",
                //    headerStyle :{
                //     backgroundColor: "purple"
                //    },
                //    headerTitleStyle: {
                //     fontWeight: "bold"
                //    },
                //    headerRight : ()=> (
                //     <Pressable onPress={() => Alert.alert('Menu Button Pressed!')}>
                //         <Text>Menu</Text>
                        
                //     </Pressable>
                //    )
                // }}
                
                />
                <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>

            </Stack.Navigator>
    
    )
}

export default AllScreens;