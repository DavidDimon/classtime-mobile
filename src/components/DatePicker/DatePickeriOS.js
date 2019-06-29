import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  DatePickerIOS,
  StyleSheet,
} from 'react-native'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { Modal } from '@components'
import { Colors } from '@styles'

const formatDates = {
  date: 'DD/MM/YYYY',
  datetime: 'DD/MM/YYYY - HH:mm',
  time: 'HH:mm',
}

const styles = StyleSheet.create({
  contentModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  dateContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 2,
    height: 40,
    borderColor: Colors.grayLight,
  },
  dateText: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.silver,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#777',
    paddingTop: 10,
    paddingLeft: 5,
  },
  backButton: {
    paddingLeft: 5,
    alignSelf: 'center',
  },
  headerTitle: {
    marginRight: 20,
  },
})

const DatePicker = ({
  value,
  name,
  mode,
  onChange,
  style,
  minDate,
  maxDate,
  label,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dateContent}
        onPress={() => setOpen(true)}
      >
        <Text>{moment(value).format(formatDates[mode])}</Text>

        <Icon
          name="chevron-down"
          type="material-community"
          size={20}
          color="#000"
        />
      </TouchableOpacity>
      <Modal open={open} type="bottom" onClose={() => setOpen(false)}>
        <View style={styles.contentModal}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setOpen(false)}
            >
              <Icon
                name="chevron-left"
                type="material-community"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{label}</Text>
            <View />
          </View>
          <DatePickerIOS
            date={moment(value).toDate()}
            mode={mode}
            minimumDate={minDate}
            maximumDate={maxDate}
            style={styles.dateText}
            onDateChange={value => {
              onChange(name, value)
              setOpen(false)
            }}
          />
        </View>
      </Modal>
    </View>
  )
}

export default DatePicker
