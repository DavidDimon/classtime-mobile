import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { borderShadow, Colors } from '@styles'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    margin: 10,
    maxWidth: '95%',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    ...borderShadow,
  },
  leftContent: {
    width: 30,
    marginLeft: 15,
    alignSelf: 'center',
  },
  rightContent: {
    flexGrow: 1,
    padding: 10,
  },
  titleView: {
    flexGrow: 1,
    flexDirection: 'row',
    maxHeight: 20,
    justifyContent: 'space-between',
  },
  user: {
    fontWeight: 'bold',
  },
  message: {
    color: Colors.silver,
  },
})

const Item = ({ item }) => (
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

export default Item
