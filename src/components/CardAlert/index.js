import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { Colors } from '@styles'
import { styles } from './styles'

const CardAlert = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.leftContent}>
      <Icon
        name="message-outline"
        size={25}
        color={Colors.success}
        type="material-community"
      />
    </View>
    <View style={styles.rightContent}>
      <View style={styles.titleView}>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.message}>
          {moment(item.date).format('HH:mm:ss')}
        </Text>
      </View>

      <Text style={styles.message}>{item.message}</Text>
    </View>
  </View>
)

export default CardAlert
