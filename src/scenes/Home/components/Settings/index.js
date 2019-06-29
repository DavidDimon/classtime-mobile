import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { Colors } from '@styles'
import { styles } from './styles'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
        <View />
        <Icon
          name="account-group"
          type="material-community"
          size={40}
          color={Colors.white}
        />
        <Text style={styles.textButton}>{'Usuários'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('disciplineForm')}
      >
        <View />
        <Icon
          name="book-plus"
          type="material-community"
          size={40}
          color={Colors.white}
        />
        <Text style={styles.textButton}>{'Criar aulas'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(Settings)
