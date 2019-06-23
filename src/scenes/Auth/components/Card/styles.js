import { StyleSheet } from 'react-native'
import { Colors, borderShadow } from '@styles'

export const styles = StyleSheet.create({
  card: {
    height: '40%',
    borderWidth: 2,
    backgroundColor: Colors.white,
    marginLeft: 10,
    marginRight: 20,
    borderColor: Colors.white,
    ...borderShadow,
  },
  iconView: {
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 5,
    height: 60,
    width: 65,
    borderRadius: 70,
    backgroundColor: Colors.white,
    top: 20,
    ...borderShadow,
  },
})
