import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grayLightTransparent,
  },
})

const Loading = ({ isLoading }) =>
  isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={Colors.brand} />
    </View>
  ) : (
    <View />
  )

export default Loading
