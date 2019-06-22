import React, { useCallback } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { borderShadow, Colors } from '@styles'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    margin: 10,
    borderRadius: 10,
    ...borderShadow,
  },
  leftContent: {
    width: 30,
    marginLeft: 15,
    alignSelf: 'center',
  },
  rightContent: {
    padding: 10,
  },
  discipline: {
    fontWeight: 'bold',
  },
  term: {
    color: Colors.silver,
  },
})

const Item = ({ discipline, navigation }) => {
  const onNavigate = useCallback(
    () => navigation.navigate('discipline', { discipline }),
    []
  )

  return (
    <TouchableOpacity onPress={onNavigate} style={styles.card}>
      <View style={styles.leftContent}>
        <Icon
          name="google-classroom"
          size={25}
          color={Colors.primary}
          type="material-community"
        />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.discipline}>{discipline.name}</Text>
        <Text style={styles.term}>{discipline.term}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default withNavigation(Item)
