import React, { useEffect, useCallback } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { getItem } from '@services/db'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

const AuthLoading = ({ navigation }) => {
  const onAuth = useCallback(async () => {
    const account = await getItem('account')
    console.log(account)
    navigation.navigate(account ? 'app' : 'auth')
  }, [])

  useEffect(() => {
    onAuth()
  }, [])

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default withNavigation(AuthLoading)
