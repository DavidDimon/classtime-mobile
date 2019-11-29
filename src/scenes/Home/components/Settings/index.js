import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { Colors } from '@styles'
import { styles } from './styles'
import { getUser } from '@services/auth'

const Settings = ({ navigation }) => {
  const [user, setUser] = useState({})
  const loadUser = useCallback(async () => {
    const user = await getUser()
    setUser({ ...user, name: user.name.split(' ')[0] })
  })

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <View style={styles.content}>
      <Text style={styles.label}>
        {'Nome: '}
        <Text style={styles.value}>{user.name}</Text>
      </Text>

      <Text style={styles.label}>
        {'Email: '}
        <Text style={styles.value}>{user.email}</Text>
      </Text>

      <Text style={styles.label}>
        {'Matrícula: '}
        <Text style={styles.value}>{user.studentId}</Text>
      </Text>

      {user.role >= 3 && <View style={styles.menuContent}>
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
      </View>}
    </View>
  )
}

export default withNavigation(Settings)
