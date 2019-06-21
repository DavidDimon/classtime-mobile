import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { EmptyList } from '@components'
import Item from './Item'
import { getDisciplines } from '@services/requests/disciplines'

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
})

const DisciplineList = () => {
  const [disciplines, setDisciplines] = useState([])

  const loadOnMount = useCallback(async () => {
    const { data } = await getDisciplines()
    setDisciplines(data)
  }, [])

  useEffect(() => {
    loadOnMount()
  }, [])

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={disciplines}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <Item key={index.toString()} discipline={item} />
      )}
      ListEmptyComponent={<EmptyList label="Nenhuma turma encontrada!" />}
    />
  )
}

export default DisciplineList
