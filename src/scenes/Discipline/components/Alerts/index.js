import React from 'react'
import { FlatList } from 'react-native'
import { CardAlert } from '@components'

const Alerts = ({ alerts = [] }) => {
  return (
    <FlatList
      data={alerts}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <CardAlert key={index.toString()} item={item} />
      )}
    />
  )
}

export default Alerts
