import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import moment from 'moment'
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
    marginBottom: 3,
    marginTop: 3,
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

const Item = ({ item, isSelected, onChange, index }) => {
  const alerts = generateArray(item.countAlerts, '')
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: isSelected
            ? 'rgba(105, 176, 244, 0.8)'
            : Colors.grayLight,
        },
      ]}
      onPress={onChange}
    >
      <Text
        style={{
          color: isSelected ? Colors.textColorReverse : Colors.textColor,
          fontSize: 13,
        }}
      >
        {`Aula ${index + 1}`}
      </Text>
      <Text
        style={[
          styles.date,
          {
            color: isSelected ? Colors.textColorReverse : Colors.textColor,
          },
        ]}
      >
        {moment(item.date, 'DD/MM/YYYY').format('DD/MM')}
      </Text>
      <Text
        style={{
          color: isSelected ? Colors.textColorReverse : Colors.textColor,
          fontSize: 13,
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
