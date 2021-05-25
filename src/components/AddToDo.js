import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native'

const AddToDo = () => {
  const [toDo, setToDo] = useState("")
  return(
    <TextInput
    style={styles.input}
    placeholder="add new to do"
    onChangeText={setToDo}
    value={toDo}
    >
    </TextInput>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    borderWidth: 2
  }
});

export default AddToDo