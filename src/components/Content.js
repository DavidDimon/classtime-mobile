import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Animatable } from './'
import { Colors } from '../styles'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
})

const animationsType = {
  up: 'bounceInUp',
  down: 'bounceInDown',
  left: 'bounceInLeft',
  right: 'bounceInRight',
}

const Content = ({ children, animation, animationTime, style, notchColor }) => {
  return animation ? (
    <Animatable
      style={[styles.content, style]}
      type={animationsType[animation]}
      duration={animationTime}
    >
      <SafeAreaView style={[styles.content, style]}>{children}</SafeAreaView>
    </Animatable>
  ) : (
    <View style={[styles.content, style]}>
      <SafeAreaView style={{ backgroundColor: notchColor }} />
      {children}
    </View>
  )
}

Content.defaultProps = {
  notchColor: '#fff',
}

export default Content
