import React, { useCallback, useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Colors } from '@styles'
import { getGrid } from '@services/requests/grid'
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
    setFilter(Object.keys(alerts)[0])
    setDiscipline({
      ...param,
      beginAt: moment(param.beginAt),
      endAt: moment(param.endAt),
      alerts: { ...alerts },
    })
    setLoading(false)
  }, [])

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
