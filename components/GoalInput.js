import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'

const GoalInput = (props) => {
  const [task, setTask] = useState('')
  const handleTask = (enteredText) => {
    setTask(enteredText)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new task"
        style={styles.input}
        onChangeText={handleTask}
        value={task}
      />
      <Button title="ADD" onPress={props.onAddTask.bind(this, task)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
})

export default GoalInput
