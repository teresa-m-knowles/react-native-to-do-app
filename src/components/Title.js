import React from 'react';
import {Text, StyleSheet} from 'react-native'
const Title = () => {
  return (
    <Text style={styles.title}>To Dos</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default Title;