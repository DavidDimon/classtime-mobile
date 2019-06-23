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

const MenuButtons = ({ menuSelected, onPress, role }) => {
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

      {role >= 2 && (
        <MenuItem
          color={Colors.gradientOrange}
          label="Turmas"
          name="book-open-variant"
          active={menuSelected === 'disciplines'}
          onPress={() => onPress('disciplines')}
        />
      )}

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
