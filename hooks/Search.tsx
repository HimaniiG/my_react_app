import React, { memo } from "react";
import { TextInput, StyleSheet, View } from "react-native";

type SearchProp = {
    onChange: (text: string) => void;
};

function Search({ onChange }: SearchProp) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Search User..."
                onChangeText={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
});

export default memo(Search);
