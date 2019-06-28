import React, { useState } from 'react'
import { withNavigation } from 'react-navigation'
import { Content, Header } from '@components'
import { Colors } from '@styles'

const AlertForm = ({ navigation }) => {
  const [discipline, setDiscipline] = useState(
    navigation.getParam('discipline')
  )

  return (
    <Content notchColor={Colors.blue}>
      <Header title="Criar novo alerta" />
    </Content>
  )
}

export default withNavigation(AlertForm)
