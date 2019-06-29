import React, { useCallback, useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Colors } from '@styles'
import { getGrid } from '@services/requests/grid'
import { DateGrid, Alerts, Header, Users } from './components'

const Discipline = ({ navigation }) => {
  const [discipline, setDiscipline] = useState({})
  const [tabSelected, setTabSelected] = useState('alerts')

  const loadOnMount = useCallback(async () => {
    const param = navigation.getParam('discipline')
    const { data } = await getGrid(param.Grid.ID)
    setDiscipline({ ...param, alerts: data.Alerts })
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

      {tabSelected === 'alerts' && (
        <React.Fragment>
          <DateGrid />
          <Alerts alerts={discipline.alerts} />
        </React.Fragment>
      )}

      {tabSelected === 'users' && <Users users={discipline.users} />}
    </Content>
  )
}

export default withNavigation(Discipline)
