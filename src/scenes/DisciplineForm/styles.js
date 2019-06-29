import { StyleSheet } from 'react-native'
import { Colors } from '@styles'

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    margin: 10,
  },
  button: {
    height: 70,
    width: '100%',
    backgroundColor: Colors.blue,
  },
  error: {
    alignSelf: 'center',
    marginBottom: 20,
    color: Colors.danger,
  },
})
