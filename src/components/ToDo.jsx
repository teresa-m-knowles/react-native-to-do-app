import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';

const ToDo = ({ toDo, onCheck, onDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    onDelete(toDo);
  };

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  // useEffect(() => {
  //   if (checked) {
  //     onCheck(toDo);
  //   }
  // });

  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={handleCheck}
      />
      <Text
        style={[
          styles.text,
          checked ? styles.checkedToDo : styles.uncheckedToDo,
        ]}
      >
        {toDo}
      </Text>
      <Button
        icon="trash-can"
        style={styles.deleteButton}
        onPress={handleDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  text: {
    fontSize: 15,
  },
  checkedToDo: {
    textDecorationLine: 'line-through',
  },
  uncheckedToDo: {
    textDecorationLine: 'none',
  },
  deleteButton: {
    alignSelf: 'flex-end',
  },
});

export default ToDo;
