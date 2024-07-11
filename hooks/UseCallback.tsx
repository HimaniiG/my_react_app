import React, { useCallback, useState } from "react";
import { View, Button, FlatList, Text, StyleSheet } from "react-native";
import Search from "./Search";
import { shuffleArray } from "./utils";

type UseCalllbackProps = {};

const allUsers = [
    'John',
    'Alex',
    'David',
    'Damon',
    'Stephan',
    'Elena'
];



export default function UseCallback(props: UseCalllbackProps) {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback( (text: string) => {
        const filterUsers = allUsers.filter((user) => user.includes(text));
        setUsers(filterUsers);
    },[]);

    return (
        <View style={styles.container}>
            <Search onChange={handleSearch} />
            <FlatList
                data={users}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View >
                        <Text>{item}</Text>
                    </View>
                )}
            />
            <View style= {styles.button}>
           <Button title="Shuffle" onPress={() => setUsers(shuffleArray(allUsers))} />
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }

});
