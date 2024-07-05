import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function Demo() {

    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Form </Text>
            <Text style={styles.text}>Your Name is : {name}</Text>

            <TextInput style={styles.inputStyle}
                placeholder="Enter your Name"
                value={name}
                onChangeText={(text) => setName(text)} />
            <Button title='clear text Input' onPress={() => setName(' ')} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
    },
    text: {
        marginBottom: 16,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 8


    },
    inputStyle: {
        fontSize: 20,
        color: 'blue',
        borderWidth: 2,
        marginLeft: 8
    }
})
