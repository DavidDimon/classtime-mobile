import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Item from './Item'

const days = [
  { label: 'Domingo', value: 'sunday' },
  { label: 'Segunda', value: 'monday' },
  { label: 'Terça', value: 'tuesday' },
  { label: 'Quarta', value: 'wednesday' },
  { label: 'Quinta', value: 'thursday' },
  { label: 'Sexta', value: 'friday' },
  { label: 'Sábado', value: 'saturday' },
]

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  label: {
    color: '#777',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 4,
  },
})

const SelectDays = ({ value, label, onSelect }) => {
  return (
    <React.Fragment>
      <Text style={styles.label}>{label}</Text>
      <ScrollView style={styles.content} horizontal>
        {days.map((day, index) => (
          <Item
            onSelect={() => onSelect(day.value)}
            day={day}
            key={index.toString()}
            isSelected={value.includes(day.value)}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  )
}

export default SelectDays
