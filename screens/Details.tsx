// import {View,Text,StyleSheet,Button} from 'react-native'
// import { stackScreens } from './AllScreens';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';


// type DetailsScreenPropType = NativeStackScreenProps<stackScreens,'Details'>

// export default function DetailsScreen(props : DetailsScreenPropType){
//     const {navigation, route} = props;
//     const {msg2} = route.params
//     const goToHomeScreen = () => {
//       navigation.navigate('Home')
//     }

//     return (
//         <View style = {styles.container}>
//             <Text style= {styles.text}>
//              Details Screen
//             </Text>
//             <Button title="Go to Home Screen" onPress= {goToHomeScreen}/>
//             <Text style= {styles.text}>Message : {msg2}</Text>
//         </View>
//     );
// }



// const styles = StyleSheet.create({
//     container : {
//         flex:1,
//         justifyContent : 'center',
//         alignItems:'center',
//         backgroundColor :'plum'

//       },
//       text : {
//         marginBottom: 16,
//         fontSize: 24,
//         fontWeight:'bold'
// }})


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CounterStackParams } from './CounterStack';

type Props = NativeStackScreenProps<CounterStackParams, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { counter, setCounter } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
});

export default DetailsScreen;
