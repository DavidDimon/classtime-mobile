import React from 'react'
import { FlatList } from 'react-native'

import Item from './Item'

const Alerts = ({ alerts = [] }) => {
  return (
    <FlatList
      data={alerts}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item key={index.toString()} item={item} />
      )}
    />
  )
}

export default Alerts
