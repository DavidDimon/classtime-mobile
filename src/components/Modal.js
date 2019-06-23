import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.grayLightTransparent,
  },
})

const types = {
  bottom: 'flex-end',
  top: 'flex-start',
  center: 'center',
  fullScreen: 'flex-start',
}

const CustomModal = ({ open, onClose, type, children }) => (
  <Modal
    animationType="slide"
    visible={open}
    onRequestClose={onClose}
    transparent={type !== 'fullScreen'}
    hardwareAccelerated
  >
    {type === 'fullScreen' ? (
      children
    ) : (
      <View style={[styles.container, { alignItems: types[type] }]}>
        {children}
      </View>
    )}
  </Modal>
)

CustomModal.defaultProps = {
  open: false,
  type: 'fullScreen',
}

export default CustomModal
