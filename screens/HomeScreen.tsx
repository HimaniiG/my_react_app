import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {Text,View, StyleSheet,Button} from 'react-native';
import { stackScreens } from './AllScreens';



type HomeScreenPropType = NativeStackScreenProps<stackScreens,"Home">;


export default function HomeScreen(props : HomeScreenPropType){
    const {navigation} = props;
   const goToAboutScreen = () => {
    navigation.navigate('About',{msg : 'Message from Home Screen'})
   }

    return (
        <View style = {styles.container}>
            <Text style= {styles.text}>
             Home Screen</Text>
             <Button
        title="Go to About Screen"
        onPress={ goToAboutScreen}/>
        </View>


    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center',
        alignItems:'center',
        backgroundColor :'lightgreen'
     
      },
      text : {
        marginBottom: 16,
        fontSize: 24,
        fontWeight:'bold'
}})

