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
      <TouchableHighlight
        onPress={() => setAddMode(true)}
        style={styles.button}
        activeOpacity={0.6}
        underlayColor={'#30C4C9'}
      >
        <Text style={styles.buttonText}>{'➕'}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 80,
    paddingLeft: 50,
    paddingRight: 50,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: '#30C4C9',
    borderWidth: 7,
    marginLeft: 130,
    marginBottom: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 40,
    paddingLeft: 1,
  },
})
