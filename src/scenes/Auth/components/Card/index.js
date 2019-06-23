import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './styles'
import { Colors } from '@styles'

const Card = ({ icon, children, style }) => (
  <React.Fragment>
    <View style={styles.iconView}>
      <Icon
        name={icon}
        type="material-community"
        size={40}
        color={Colors.silver}
      />
    </View>
    <View style={[styles.card, style]}>{children}</View>
  </React.Fragment>
)

Card.defaultProps = {
  icon: 'account',
}

export default Card
