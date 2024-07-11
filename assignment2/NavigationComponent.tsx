import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";




export type StackType = {
    FirstScreen: { selectedItems?: { id: string; title: string; image: string; description: string }[] } | undefined;
    SecondScreen: { selectedItems?: string[] } | undefined;
  };
  
const stack = createNativeStackNavigator<StackType>();

const NavigationComponent = () => {
return(
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="FirstScreen" component={FirstScreen} />
            <stack.Screen name= "SecondScreen" component={SecondScreen}/>

        </stack.Navigator>
    </NavigationContainer>

);
}


export default NavigationComponent;