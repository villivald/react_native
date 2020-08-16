import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [task, setTask] = useState('')
  const handleTask = (enteredText) => {
    setTask(enteredText)
  }
  const addHandler = () => {
    props.onAddTask(task)
    setTask('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new task"
          style={styles.input}
          onChangeText={handleTask}
          value={task}
        />
        <View style={styles.buttonLine}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonLine: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
})

export default GoalInput
