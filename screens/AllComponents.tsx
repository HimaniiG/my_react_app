// import React from "react";
// import { Image,View,Alert, Button, Pressable, StyleSheet, Text } from 'react-native';


// export default function App() {
//     return (

//    <View style= {styles.container}>
//     <View style={{backgroundColor:'green',alignSelf:'flex-start'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 1</Text>
//    </View>
//    <View style={{backgroundColor:'midnightblue',alignItems:'flex-end'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 2</Text>
//    </View>
//    <View style={{backgroundColor:'brown',alignSelf:'center'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 3</Text>
//    </View>
//    <View style={{backgroundColor:'yellow',alignSelf:'stretch'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 4</Text>
//    </View>
//    <View style={{backgroundColor:'red',alignSelf:'baseline'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 5</Text>
//    </View>
//    <View style={{backgroundColor:'purple'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 6</Text>
//    </View>
//    <View style={{backgroundColor:'blue'}}>
//    <Text style = {[styles.title,styles.Box]}> Box 7</Text>
   
   
   

// //   const [isModalVisible, setIsModalVisible] = useState(false);
// //   return (
// //     <View
// //            style = {styles.container}>

// //         <Greet name ="john"/>

// //         <Greet name ="Edward"/>


// //         <Text style= {styles.title}>StyleSheet Api</Text>

// //         <StatusBar backgroundColor={'green'} barStyle={'dark-content'} ></StatusBar>

// //         <ActivityIndicator />
// //         <ActivityIndicator color={'midlightblue'} size={'large'} />
// //         <ActivityIndicator size={'small'} color={'red'} animating={false} /> 
  
//      <Button title='Click Me' onPress={() => Alert.alert('invalid data','enter correct data',[
//       {
//         text:'cancel',
//         onPress : () => console.log('cancel clicked')
//       },
//       {
//         text : 'ok',
//         onPress: () => console.log('ok pressed')
//       }
//      ])}  color={'midnightblue'}/>

//      <Modal visible = {isModalVisible} animationType='slide' presentationStyle='formSheet'> 
//       <View
//       style={{
//         flex: 1,
//         backgroundColor: 'grey',
//         padding : 30
//       }}>

//       <Button title='Close' onPress={() => setIsModalVisible(false)}  color={'orange'}/>
//       </View>

//       </Modal> 
//      <Pressable onPress={() => console.log("image pressed")} onPressIn={() => console.log("image pressIn")}>
//      <Image source={require('default_pic.jpg')} style = {{height : 300, width:300}}></Image></Pressable> 

//      <Pressable onLongPress={()=> console.log('long press clicked')}>
//      <Text>
//      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

// “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
// The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.


//      </Text>
  
// </Pressable>
//      <Image source={require('default_pic.jpg')} style = {{height : 300, width:300}}></Image>
//      <Text>
//      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

// “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
// The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.


//      </Text> 

//      <View style= {[styles.Box,styles.BoxBgColorPink, styles.BoxElevation]}><Text style={{borderRadius: 5, backgroundColor:'red'}}>This is Pink</Text></View>
//      <View style= {[styles.Box,styles.BoxBgColorPurple,styles.BoxShadow,styles.BoxElevation]}><Text>This is Purple</Text></View>


//     </View>

//   );
//   }

// const styles = StyleSheet.create({
//   container : {
//     height:600,
//     flexWrap:'wrap',
//     alignItems:'stretch',
//     backgroundColor :'black',
//     padding: 30
//   },
//   title : {
//     textAlign : 'center',
//     fontSize: 18
//   },
//   Box : {
//     height: 100,
//     width : 100,
//     padding:20,
  
//   },
//   BoxBgColorPink: {
//      backgroundColor: "pink"
//   },
//   BoxBgColorPurple: {
//     backgroundColor: "purple"
//  },
//  BoxShadow : {
//   shadowColor: "#3333333",
//   shadowOpacity : 1,
//   shadowRadius : 4,
//  },
//  BoxElevation: {
//   elevation : 10
//  })