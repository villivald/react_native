import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [isAddMode, setAddMode] = useState(false)

  const addTask = (taskTitle) => {
    setTaskList((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ])
    setAddMode(false)
  }

  const removeHandler = (goalId) => {
    setTaskList((currentTasks) => {
      return currentTasks.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelAddHandler = () => {
    setAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <TouchableHighlight
        onPress={() => setAddMode(true)}
        style={styles.button}
        activeOpacity={0.6}
        underlayColor={'#30C4C9'}
      >
        <Text style={styles.buttonText}>{'➕'}</Text>
      </TouchableHighlight>
      <GoalInput
        visible={isAddMode}
        onAddTask={addTask}
        onCancel={cancelAddHandler}
      />
      <FlatList
        data={taskList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 90,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: '#30C4C9',
    borderWidth: 7,
    marginLeft: 90,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 40,
  },
})
