import React, { useMemo, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { initialItems } from "./utils";




export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(() => 
        items.find((item) => item.id === count), 
    [items,count]);

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Count: {count}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Increase"
                    onPress={() => setCount(count + 1)}
                />
            </View>
            <Text style={styles.counterText}>Selected item: {selectedItem ? selectedItem.id : 'None'}</Text>
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
