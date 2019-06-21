import React, { useState, useEffect, useCallback } from 'react'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Header, MenuButtons, DisciplineList } from './components'
import { onLogout, getUser } from '@services/auth'
import { Colors } from '@styles'

const Home = ({ navigation }) => {
  const [username, setUsername] = useState({})
  const [menu, setMenu] = useState('classes')
  const loadUser = useCallback(async () => {
    const user = await getUser()
    setUsername(user.name.split(' ')[0])
  })

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Content notchColor={Colors.blue}>
      <Header
        title={`Olá ${username}`}
        onPressRight={() => onLogout(navigation)}
      >
        <MenuButtons menuSelected={menu} onPress={setMenu} />
      </Header>

      <DisciplineList />
    </Content>
  )
}

export default withNavigation(Home)
