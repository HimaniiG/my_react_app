import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Onboarding: undefined;
  BottomTab: undefined;
  LoginScreen : undefined
};

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const gotoHomeScreen = () => {
    navigation.navigate('BottomTab');
  };

  const gotoLoginScreen = () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <View style= {styles.container}>
      <Text style={{fontSize:16,textAlign:'center'}}>This is onboarding screen</Text>
      <View style= {styles.button}>
      <Button title = "Let's Begin" onPress = {gotoLoginScreen}/>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        position: 'absolute',
        bottom: 24,
        right: 24,
      },

})