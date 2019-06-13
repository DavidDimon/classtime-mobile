import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: Colors.silver,
    alignSelf: 'center',
  },
})

const EmptyList = ({ label }) => (
  <View style={styles.container}>
    <Icon
      name="file-alert"
      type="material-community"
      size={40}
      color={Colors.silver}
    />
    <Text style={styles.label}>{label}</Text>
  </View>
)

export default EmptyList
