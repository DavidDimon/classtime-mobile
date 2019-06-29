import { StyleSheet } from 'react-native'
import { Colors, borderShadow } from '@styles'

export const styles = StyleSheet.create({
  content: {
    ...borderShadow,
  },
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
    marginTop: 0,
  },
  text: {
    color: Colors.white,
  },
  classroomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  classroomText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: 10,
  },
  tabView: {
    flexDirection: 'row',
  },
  tabButton: {
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
