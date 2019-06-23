import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { EmptyList, CardAlert } from '@components'
import { getAlertsOfDay } from '@services/requests/grid'

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
})

const AlertList = () => {
  const [alerts, setAlerts] = useState([])

  const loadOnMount = useCallback(async () => {
    const { data } = await getAlertsOfDay()
    setAlerts(data)
  }, [])

  useEffect(() => {
    loadOnMount()
  }, [])

  return (
    <FlatList
      contentContainerStyle={styles.content}
      data={alerts}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => (
        <CardAlert key={index.toString()} item={item} />
      )}
      ListEmptyComponent={<EmptyList label="Nenhum alerta para hoje" />}
    />
  )
}

export default AlertList
