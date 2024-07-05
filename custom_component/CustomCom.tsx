import React from "react";
import { View,Text } from "react-native";


type Props = {
    name: string,
};

//regular function and explicitly typ
function Greet(props: Props): JSX.Element {
    return (
        <View>
            <Text>Hello, {props.name}</Text>
        </View>
    );
}


// //using arrow function
// const Greet2 = (props: Props) : JSX.Element => {
//     return (
//         <View>
//         <Text>Hello, {props.name}</Text>
//     </View>
//     )
// }

// //using destructuring
// const Greet = (props: Props): JSX.Element => {
//     return (
//         <View>
//             <Text>Hello, {props.name}</Text>
//         </View>
//     );
// };


export default Greet;