import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  DatePickerIOS,
  StyleSheet,
} from 'react-native'
import moment from 'moment'
import { Icon, Modal } from '@components'
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
    flexDirection: 'row',
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
    justifyContent: 'flex-start',
  },
  backButton: {
    alignSelf: 'center',
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
}) => {
  const [open, setOpen] = useState(false)

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.dateContent}
        onPress={() => setOpen(true)}
      >
        <Text>{moment(value).format(formatDates[mode])}</Text>

        <Icon
          name="chevron-down"
          type="material-community"
          size={15}
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
