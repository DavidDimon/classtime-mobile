import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
})

const menuItems = [
  {
    label: 'Adicionar nova turma',
    value: 'disciplineForm',
  },
  {
    label: 'Gerenciar usuários',
    value: 'userForm',
  },
]

const DisciplineMenu = () => {
  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={menuItems}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item key={index.toString()} discipline={item} />
      )}
    />
  )
}

export default DisciplineMenu
