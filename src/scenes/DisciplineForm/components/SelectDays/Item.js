import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  content: {
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.silver,
    marginRight: 5,
  },
  text: {
    fontWeight: 'bold',
  },
})

const Item = ({ day, onSelect, isSelected }) => (
  <TouchableOpacity
    style={[
      styles.content,
      {
        backgroundColor: isSelected ? Colors.blue : Colors.white,
      },
    ]}
    onPress={onSelect}
  >
    <Text
      style={[styles.text, { color: isSelected ? Colors.white : Colors.text }]}
    >
      {day.label}
    </Text>
  </TouchableOpacity>
)

export default Item
