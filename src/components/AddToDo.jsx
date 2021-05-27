import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AddToDo = ({ onToDoSubmit }) => {
  const [toDo, setToDo] = useState('');

  const handleSubmit = () => {
    onToDoSubmit(toDo);
    setToDo('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="add new task"
        placeholder="clean the dishes"
        onChangeText={setToDo}
        value={toDo}
        onSubmitEditing={handleSubmit}
      />

      <Button
        mode="contained"
        style={styles.button}
        accessibilityLabel="Add a new to do"
        onPress={handleSubmit}
      >
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    // paddingLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 50,
    marginTop: 10,
  },
});

export default AddToDo;
