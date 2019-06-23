import React, { useCallback } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  DatePickerAndroid,
  Text,
} from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dateText: {
    color: '#000',
  },
})

const DatePicker = ({
  value,
  name,
  onChange,
  minDate,
  maxDate,
  style,
  fontSize,
  iconSize,
  showIcon,
}) => {
  const openDate = useCallback(async () => {
    try {
      const dateObject = {
        day: moment(value).format('DD'),
        month: moment(value).format('MM'),
        year: moment(value).format('YYYY'),
        hour: moment(value).format('HH'),
        minute: moment(value).format('mm'),
      }
      const { action, year, month, day } = await DatePickerAndroid.open({
        day: dateObject.day,
        month: dateObject.month,
        year: dateObject.year,
        minDate,
        maxDate,
        mode: 'calendar',
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        const date = new Date(year, month, day)
        onChange(
          name,
          moment(date)
            .startOf('day')
            .minutes(dateObject.minute)
            .hours(dateObject.hour)
        )
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }, [value])

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={openDate}>
      <Text style={[styles.dateText, { fontSize }]}>
        {moment(value).format('DD/MM/YYYY')}
      </Text>
      {showIcon && (
        <Icon
          name="chevron-down"
          type="material-community"
          size={iconSize}
          color="#000"
        />
      )}
    </TouchableOpacity>
  )
}

DatePicker.defaultProps = {
  iconSize: 15,
  fontSize: 14,
  showIcon: true,
}

export default DatePicker
