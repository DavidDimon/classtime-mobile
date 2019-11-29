import React, { useCallback, useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Colors } from '@styles'
import { getGrid } from '@services/requests/grid'
import { updateClassroom } from '@services/requests/disciplines'
import { DateGrid, Alerts, Header, Users } from './components'

import moment from 'moment'

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const parseAlerts = alerts =>
  alerts && alerts.length
    ? alerts.reduce((memo, cur) => {
        const key = moment(cur.date).format('DD/MM/YYYY')
        return { ...memo, [key]: [...(memo[key] || []), cur] }
      }, {})
    : []

const Discipline = ({ navigation }) => {
  const [discipline, setDiscipline] = useState({})
  const [tabSelected, setTabSelected] = useState('alerts')
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)

  const loadOnMount = useCallback(async () => {
    const param = navigation.getParam('discipline')
    const { data } = await getGrid(param.Grid.ID)
    const alerts = parseAlerts(data.Alerts)
    setFilter(Object.keys(alerts)[Object.keys(alerts).length - 1])
    setDiscipline({
      ...param,
      beginAt: moment(param.beginAt),
      endAt: moment(param.endAt),
      alerts: { ...alerts },
    })
    setLoading(false)
  }, [])

  const onUpdateClassroom = useCallback(
    async classroom => {
      setLoading(true)
      const { data } = await updateClassroom(discipline.ID, classroom)
      const updatedDiscipline = data.discipline
      const res = await getGrid(updatedDiscipline.Grid.ID)
      const alerts = parseAlerts(res.data.Alerts)
      setFilter(Object.keys(alerts)[Object.keys(alerts).length - 1])
      setDiscipline({
        ...updatedDiscipline,
        beginAt: moment(updatedDiscipline.beginAt),
        endAt: moment(updatedDiscipline.endAt),
        alerts: { ...alerts },
      })
      setLoading(false)
    },
    [discipline]
  )

  useEffect(() => {
    const param = navigation.getParam('reset')
    if (param === undefined || param) {
      loadOnMount()
    }
  }, [navigation])

  return (
    <Content notchColor={Colors.blue}>
      <Header
        discipline={discipline}
        tabSelected={tabSelected}
        onChangeTab={setTabSelected}
        updateClassroom={onUpdateClassroom}
      />

      {tabSelected === 'alerts' && !loading && (
        <React.Fragment>
          <DateGrid
            beginAt={discipline.beginAt}
            endAt={discipline.endAt}
            alerts={discipline.alerts}
            filter={filter}
            onChange={setFilter}
          />
          <Alerts alerts={discipline.alerts ? discipline.alerts[filter] : []} />
        </React.Fragment>
      )}

      {tabSelected === 'users' && !loading && (
        <Users users={discipline.users} />
      )}

      {loading && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </Content>
  )
}

export default withNavigation(Discipline)
