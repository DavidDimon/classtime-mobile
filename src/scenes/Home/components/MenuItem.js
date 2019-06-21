import React, { useMemo } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  touchable: {
    alignSelf: 'center',
  },
  button: {
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  label: {
    paddingTop: 5,
    paddingLeft: 3,
  },
})

const MenuItem = ({ onPress, active, label, color, name }) => {
  const activeColor = useMemo(() =>
    active
      ? {
          shadowColor: color[1],
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.7,
          shadowRadius: 2,
        }
      : {}
  )
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.touchable, activeColor]}
        onPress={onPress}
      >
        <LinearGradient style={styles.button} colors={color}>
          <Icon name={name} type="material-community" size={20} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default MenuItem
