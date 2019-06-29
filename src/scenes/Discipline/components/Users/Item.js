import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors, borderShadow } from '@styles'

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    margin: 10,
    maxWidth: '95%',
    borderRadius: 20,
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
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.silver,
  },
})

const Item = ({ user }) => (
  <View style={styles.card}>
    <View style={styles.leftContent}>
      <Icon
        name="account"
        size={25}
        color={Colors.primary}
        type="material-community"
      />
    </View>
    <View style={styles.rightContent}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.subTitle}>{user.email}</Text>
    </View>
  </View>
)

export default Item
