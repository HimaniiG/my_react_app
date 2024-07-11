import React, { useMemo, useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";




export default function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleButtonPress = () => {
        setCount(count + 1)
        countRef.current++;

        console.log('State:', count)
        console.log('stateRef: ', countRef.current)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Count: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Increase"
                    onPress={handleButtonPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
