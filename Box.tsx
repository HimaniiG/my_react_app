import React from "react";
import { Text,View,StyleSheet } from "react-native";


// export default function Box({children,style}) {
//     return (
//         <View style= {[style.box,style]}> 
//             <Text style = {style.text}>{children}</Text>
//         </View>
//     )
// }

const style = StyleSheet.create({
    box : {
        backgroundColor: "lightblue",
        padding : 20
    },
    text : {
        fontSize : 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});