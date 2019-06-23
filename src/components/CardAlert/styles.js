import { StyleSheet } from 'react-native'
import { Colors, borderShadow } from '@styles'

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    margin: 10,
    maxWidth: '95%',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    ...borderShadow,
  },
  leftContent: {
    width: 30,
    marginLeft: 15,
    alignSelf: 'center',
  },
  rightContent: {
    flexGrow: 1,
    padding: 10,
  },
  titleView: {
    flexGrow: 1,
    flexDirection: 'row',
    maxHeight: 20,
    justifyContent: 'space-between',
  },
  user: {
    fontWeight: 'bold',
  },
  message: {
    color: Colors.silver,
  },
})
