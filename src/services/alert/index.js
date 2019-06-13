import { Alert } from 'react-native'

export const showConfirm = (title, body, onPress) => {
  Alert.alert(title, body, [
    { text: 'Cancelar', onPress: () => '', style: 'cancel' },
    {
      text: 'OK',
      onPress: async () => {
        onPress()
      },
    },
  ])
}

export const showAlert = (title, body) => {
  Alert.alert(title, body, [
    {
      text: 'Ok',
      onPress: () => '',
    },
  ])
}
