import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import moment from 'moment'
import Item from './Item'
import { loadDates } from '@services/gridUtils'

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  list: {
    maxHeight: 120,
  },
})

const DateGrid = ({ beginAt, endAt, alerts, filter, onChange }) => {
  const [dates, setDates] = useState([])

  const loadOnMount = useCallback(() => {
    const allDates = loadDates(beginAt, endAt, alerts)
    setDates(allDates)
  }, [beginAt, endAt])

  useEffect(() => {
    loadOnMount()
  }, [])

  return (
    <FlatList
      extraData={filter}
      style={styles.list}
      contentContainerStyle={styles.content}
      data={dates || []}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item
          key={index.toString()}
          item={item}
          isSelected={item.date === filter}
          onChange={() => onChange(item.date)}
          index={index}
        />
      )}
      horizontal
    />
  )
}

export default DateGrid
