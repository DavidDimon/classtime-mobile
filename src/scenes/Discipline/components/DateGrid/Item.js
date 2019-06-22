import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 80,
    backgroundColor: Colors.grayLight,
    marginRight: 5,
    borderRadius: 12,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  contentDot: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    maxHeight: 5,
    marginTop: 10,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 10,
    marginRight: 3,
    backgroundColor: Colors.success,
  },
})

const generateArray = (length, value) =>
  [...Array(length).keys()].map(item => value)

const Item = ({ item, index }) => {
  const alerts = generateArray(item.countAlerts, '')
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor:
            index === 0 ? 'rgba(105, 176, 244, 0.8)' : Colors.grayLight,
        },
      ]}
    >
      <Text
        style={[
          styles.date,
          {
            color: index === 0 ? Colors.textColorReverse : Colors.textColor,
          },
        ]}
      >
        {item.date}
      </Text>
      <Text
        style={{
          color: index === 0 ? Colors.textColorReverse : Colors.textColor,
        }}
      >
        {item.day}
      </Text>
      <View style={styles.contentDot}>
        {alerts &&
          alerts.map((alert, index) => (
            <View key={index.toString()} style={styles.dot} />
          ))}
      </View>
    </TouchableOpacity>
  )
}
export default Item
