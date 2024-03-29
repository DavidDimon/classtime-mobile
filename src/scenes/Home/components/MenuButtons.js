import React from 'react'
import { View, StyleSheet } from 'react-native'
import MenuItem from './MenuItem'

import { Colors } from '@styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const MenuButtons = ({ menuSelected, onPress }) => {
  return (
    <View style={styles.container}>
      <MenuItem
        color={Colors.gradientPrimary}
        label="Aulas"
        name="google-classroom"
        active={menuSelected === 'classes'}
        onPress={() => onPress('classes')}
      />

      <MenuItem
        color={Colors.gradientDanger}
        label="Avisos"
        name="alert-circle-outline"
        active={menuSelected === 'alerts'}
        onPress={() => onPress('alerts')}
      />

      <MenuItem
        color={Colors.gradientSuccess}
        label="Perfil"
        name="account"
        active={menuSelected === 'profile'}
        onPress={() => onPress('profile')}
      />
    </View>
  )
}

export default MenuButtons
