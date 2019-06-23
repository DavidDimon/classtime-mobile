import React, { useState, useEffect, useCallback } from 'react'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Header, MenuButtons, MenuContent } from './components'
import { onLogout, getUser } from '@services/auth'
import { Colors } from '@styles'

const Home = ({ navigation }) => {
  const [user, setUser] = useState({})
  const [menu, setMenu] = useState('classes')
  const loadUser = useCallback(async () => {
    const user = await getUser()
    setUser({ ...user, name: user.name.split(' ')[0] })
  })

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Content notchColor={Colors.blue}>
      <Header
        title={`Olá ${user.name}`}
        onPressRight={() => onLogout(navigation)}
      >
        <MenuButtons menuSelected={menu} onPress={setMenu} role={user.role} />
      </Header>

      <MenuContent menuSelected={menu} />
    </Content>
  )
}

export default withNavigation(Home)
