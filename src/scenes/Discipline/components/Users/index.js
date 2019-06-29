import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Item from './Item'

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
  },
})

const Users = ({ users = [] }) => {
  return (
    <FlatList
      style={styles.content}
      data={users}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item key={index.toString()} user={item} />
      )}
    />
  )
}

export default Users
