import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
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
      <Button title="Add new task" onPress={() => setAddMode(true)} />
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
})
