import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => <Text style={styles.title}>To Dos</Text>;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    // margin: 40,
  },
});

export default Title;
