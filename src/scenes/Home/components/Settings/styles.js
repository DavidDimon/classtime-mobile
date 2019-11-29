import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 15,
  },
  value: {
    fontWeight: 'normal',
  },
  label: {
    fontWeight: 'bold',
  },
  menuContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
  },
  button: {
    height: 100,
    width: 110,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(105, 176, 244, 0.6)',
    justifyContent: 'space-between',
  },
  textButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    paddingBottom: 5,
  },
})
