import React from 'react'
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native'
import { Colors, borderShadow } from '@styles'

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderRadius: 2,
    ...borderShadow,
  },
  text: {
    color: 'white',
  },
})

const Button = ({ isLoading, title, onPress, bgColor, style }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={isLoading}
    style={[styles.button, { backgroundColor: bgColor }, style]}
  >
    {isLoading ? (
      <ActivityIndicator color="white" />
    ) : (
      <Text style={styles.text}>{title}</Text>
    )}
  </TouchableOpacity>
)
Button.defaultProps = {
  bgColor: Colors.primary,
}

export default Button
