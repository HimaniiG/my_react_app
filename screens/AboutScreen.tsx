import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from './AllScreens';


type AboutScreenPropType = NativeStackScreenProps<stackScreens,'About'>


export default function AboutScreen(props: AboutScreenPropType){
    const {navigation,route} = props;
    const {msg} = route.params;

    const gotoDetailsScreen = () => {
        navigation.navigate('Details',{msg2 : 'Message from About Screen'})
    }
    return (
        <View style = {styles.container}>
            <Text style= {styles.text}>
             About Screen
            </Text>

    <Button title= "Go to Details Screen"  onPress={gotoDetailsScreen}/>
    <Text style= {styles.text}>Message : {msg}</Text>
        </View>
    );
}

// export default function AboutScreen(){
//     return (
//         <View style = {styles.container}>
//             <Text style= {styles.text}>
//               About Screen
//             </Text>
//         </View>
//     );
// }

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor :'lightgrey'
     
      },
      text : {
        marginBottom: 16,
        fontSize: 24,
        fontWeight:'bold'
}})