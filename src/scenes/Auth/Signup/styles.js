import { StyleSheet } from 'react-native'
import { Colors } from '@styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputText: {
    margin: 10,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
  },
  signup: {
    alignSelf: 'center',
    marginTop: 20,
  },
  textSignup: {
    color: Colors.blue,
  },
})
