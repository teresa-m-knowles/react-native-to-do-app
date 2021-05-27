import React, { useState } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { Snackbar } from 'react-native-paper';

import AddToDo from './AddToDo';
import ToDo from './ToDo';

const dummyData = [
  { key: 'Walk dog', checked: false },
  { key: 'change sheets', checked: false },
  { key: 'clean floors', checked: false },
];

const ToDos = () => {
  const [visible, setVisible] = useState(false);
  const [todos, setToDos] = useState(dummyData);

  const onDismissSnackBar = () => setVisible(false);

  const handleSubmit = (toDoText) => {
    if (toDoText) {
      const newToDo = { key: toDoText, checked: false };
      setToDos((oldToDos) => [...oldToDos, newToDo]);
    } else {
      setVisible(true);
    }
  };

  const sortFunction = (firstToDo, secondToDo) => {
    if (firstToDo.checked && !secondToDo.checked) {
      return -1;
    }
    if (!firstToDo.checked && secondToDo.checked) {
      return 1;
    }
    return 0;
  };

  const handleCheck = (checkedToDoText) => {
    console.log({ checkedToDoText });
    const checkedToDo = todos.find((el) => el.key === checkedToDoText);
    checkedToDo.checked = true;
    const allButChecked = todos.filter((todo) => todo.key !== checkedToDoText);
    const updatedToDos = [...allButChecked, checkedToDo];
    const sortedToDos = updatedToDos.sort(sortFunction);
    console.log({ sortedToDos });
    setToDos((oldToDos) => sortedToDos);
  };

  const handleDelete = (deletedToDo) => {
    const allButDeleted = todos.filter((todo) => todo.key !== deletedToDo);
    setToDos(allButDeleted);
  };

  return (
    <ScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'x',
          onPress: () => {
            setVisible(false);
          },
        }}
      >
        You need to add a task.
      </Snackbar>
      <AddToDo onToDoSubmit={handleSubmit} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ToDo onDelete={handleDelete} onCheck={handleCheck} toDo={item.key} />
        )}
      />
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

export default ToDos;
