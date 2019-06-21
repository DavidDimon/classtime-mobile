import React from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Content } from '@components'
import { Colors } from '@styles'

const Discipline = ({ navigation }) => {
  return (
    <Content notchColor={Colors.blue}>
      <Text>{'test'}</Text>
    </Content>
  )
}

export default withNavigation(Discipline)
