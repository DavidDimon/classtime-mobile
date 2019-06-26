import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles'
import { Colors } from '@styles'

const Background = ({ title, children, style }) => (
  <React.Fragment>
    <LinearGradient colors={Colors.gradientPrimary} style={styles.box}>
      <View style={styles.content}>
        <View style={styles.iconView}>
          <Icon
            name="account"
            type="material-community"
            size={40}
            color={Colors.silver}
          />
        </View>
        <Text style={styles.appName}>{'Classtime'}</Text>
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
    <View style={style}>{children}</View>
  </React.Fragment>
)

export default Background
