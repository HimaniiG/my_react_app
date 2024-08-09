import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProfileScreen = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.profileName}>Himani</Text>
      <Text style={styles.profileEmail}>Himani@yopmail.com</Text>
      <Button title="Edit Profile" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
});

export default ProfileScreen;
