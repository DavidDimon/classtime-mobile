import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { withFormik } from 'formik'
import { withNavigation } from 'react-navigation'
import * as R from 'ramda'

import { Content, InputText, Button } from '@components'
import { styles } from './styles'

import { authenticate } from '@services/auth'

const validate = (values, setErrors) => {
  const errors = []
  Object.keys(values).map(key => !values[key] && errors.push(key))
  setErrors(errors)
  return errors && !!errors.length
}

const Login = ({ values, handleChange, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const onLogin = useCallback(async () => {
    setLoading(true)
    try {
      if (validate(values, setErrors)) {
        setLoading(false)
        return
      }
      await authenticate(values)

      navigation.navigate('app')
    } catch (error) {
      console.warn(error)
      setLoading(false)
    }
  }, [values])

  return (
    <Content>
      <View style={styles.container}>
        <InputText
          icon="email-outline"
          label="Usuário"
          containerStyle={styles.inputText}
          onChangeText={handleChange('username')}
          value={values.username}
          error={errors.includes('username')}
        />

        <InputText
          icon="lock-outline"
          label="Senha"
          containerStyle={styles.inputText}
          onChangeText={handleChange('password')}
          value={values.password}
          error={errors.includes('password')}
          type="password"
        />

        <Button
          style={styles.button}
          title={'Login'}
          isLoading={loading}
          onPress={onLogin}
        />
      </View>
    </Content>
  )
}

const mapForm = {
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
}

const enhancer = R.pipe(
  withFormik(mapForm),
  withNavigation
)

export default enhancer(Login)
