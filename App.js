import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [taskList, setTaskList] = useState([])

  const addTask = (taskTitle) => {
    setTaskList((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ])
  }

  const removeHandler = (goalId) => {
    setTaskList((currentTasks) => {
      return currentTasks.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddTask={addTask} />
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
