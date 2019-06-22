import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import moment from 'moment'
import Item from './Item'

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  list: {
    maxHeight: 120,
  },
})

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Sex', 'Sáb']

const generateArray = length =>
  [...Array(length).keys()].map((item, index) => {
    const date = moment(new Date()).add(index * 7, 'days')
    return {
      date: date.format('DD/MM'),
      day: daysOfWeek[date.day() - 1],
      countAlerts: index === 0 ? 2 : index === 2 ? 1 : 0,
    }
  })

const DateGrid = () => {
  const [dates, setDates] = useState([])

  const loadOnMount = useCallback(() => {
    const allDates = generateArray(7)
    setDates(allDates)
  }, [])

  useEffect(() => {
    loadOnMount()
  }, [])

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={dates}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item key={index.toString()} item={item} index={index} />
      )}
      horizontal
    />
  )
}

export default DateGrid
