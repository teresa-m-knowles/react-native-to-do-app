/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import ToDos from './src/components/ToDos.jsx';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Title />
        <ToDos />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30,
  },
});
