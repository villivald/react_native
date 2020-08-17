import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = (props) => {
  const [color, setColor] = useState(styles.listItem)
  const [textStyle, setTextStyle] = useState(styles.text)
  const [done, setDone] = useState('Edit')
  const [doneText, setDoneText] = useState(styles.editButton)
  return (
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.id)}
      onPress={() => {
        color === styles.listItem
          ? (setColor(styles.done),
            setTextStyle(styles.textDone),
            setDone('✔︎'),
            setDoneText(styles.doneButton))
          : (setColor(styles.listItem),
            setTextStyle(styles.text),
            setDone('Edit'),
            setDoneText(styles.editButton))
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={color}>
          <Text style={textStyle}>{props.title}</Text>
        </View>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={doneText}>{done}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginLeft: 15,
    width: 260,
  },
  done: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#77CCA4',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 15,
    width: 260,
  },
  text: {
    fontWeight: '500',
  },
  textDone: {
    textDecorationLine: 'line-through',
    fontWeight: '400',
  },
  editButton: {
    color: 'crimson',
  },
  doneButton: {
    color: 'black',
  },
})

export default GoalItem
