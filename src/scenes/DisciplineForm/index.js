import React, { useState } from 'react'
import { withNavigation } from 'react-navigation'
import { Content, Header } from '@components'
import { Colors } from '@styles'

const DisciplineForm = ({ navigation }) => {
  return (
    <Content notchColor={Colors.blue}>
      <Header title="Criar nova turma" />
    </Content>
  )
}

export default withNavigation(DisciplineForm)
