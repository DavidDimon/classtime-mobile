import { StyleSheet } from 'react-native'
import { Colors } from '@styles'

export const styles = StyleSheet.create({
  box: {
    height: '25%',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  appName: {
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconView: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  title: {
    color: Colors.white,
    alignSelf: 'flex-end',
    marginRight: 30,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
