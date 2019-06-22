import React, { useCallback, useState, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Content, Header } from '@components'
import { Colors } from '@styles'
import { getGrid } from '@services/requests/grid'
import { DateGrid, Alerts } from './components'

const styles = StyleSheet.create({
  alertsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
})

const Discipline = ({ navigation }) => {
  const [discipline, setDiscipline] = useState({})

  const loadOnMount = useCallback(async () => {
    const param = navigation.getParam('discipline')
    const { data } = await getGrid(param.Grid.ID)
    setDiscipline({ ...param, alerts: data.Alerts })
  }, [])

  useEffect(() => {
    loadOnMount()
  }, [])

  return (
    <Content notchColor={Colors.blue}>
      <Header
        title={discipline.name}
        iconRight="comment-plus"
        onPressRight={() => ''}
        onPressLeft={() => navigation.navigate('home')}
      />

      <DateGrid />

      <Text style={styles.alertsTitle}>{'Alertas'}</Text>
      <Alerts alerts={discipline.alerts} />
    </Content>
  )
}

export default withNavigation(Discipline)
