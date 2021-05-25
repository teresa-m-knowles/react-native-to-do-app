import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title'
import AddToDo from './src/components/AddToDo'

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <AddToDo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30
  }
});
