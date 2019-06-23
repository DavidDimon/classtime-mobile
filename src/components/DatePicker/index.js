import React from 'react'
import { Platform } from 'react-native'
import DatePickerAndroid from './DatePickerAndroid'
import DatePickeriOS from './DatePickeriOS'

const DatePicker = props =>
  Platform.OS === 'android' ? (
    <DatePickerAndroid {...props} />
  ) : (
    <DatePickeriOS {...props} />
  )

export default DatePicker
