import React, { useState, useEffect, useCallback } from 'react'
import { View, Text } from 'react-native'
import { getUser } from '@services/auth'
import { styles } from './styles'

const Profile = () => {
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
    </View>
  )
}

export default Profile
