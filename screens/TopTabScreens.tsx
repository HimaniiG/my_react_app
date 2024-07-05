import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import DetailsScreen from "./Details";
import TabScreens from "./TabScreens";
import AllScreens, { stackScreens } from "./AllScreens";

const TopTab = createMaterialTopTabNavigator<stackScreens>();

const TopTabScreens = () => {
    return(
        <TopTab.Navigator>
        <TopTab.Screen name="Home" component={AllScreens} />
        <TopTab.Screen name = "About" component={AboutScreen}/>
        <TopTab.Screen name = "Details" component={DetailsScreen}/>
    </TopTab.Navigator>
    )
}

export default TopTabScreens;
