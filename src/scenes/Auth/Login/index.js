import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withFormik } from 'formik'
import { withNavigation } from 'react-navigation'
import * as R from 'ramda'

import { Content, InputText, Button } from '@components'
import { Background } from '../components'
import { styles } from './styles'

import { authenticate } from '@services/auth'
import { Colors } from '@styles'

const validate = (values, setErrors) => {
  const errors = []
  Object.keys(values).map(key => !values[key] && errors.push(key))
  setErrors(errors)
  return errors && !!errors.length
}

const Login = ({ values, handleChange, navigation, ...props }) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const [authError, setAuthError] = useState()

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
      setAuthError('Falha ao fazer o login, tente novamente')
      setLoading(false)
    }
  }, [values])

  const goToSignup = useCallback(() => navigation.navigate('signup'), [])

  useEffect(() => {
    const email = navigation.getParam('email')
    if (email) {
      props.setFieldValue('email', email)
    }
  }, [navigation])

  return (
    <Content notchColor="#69b0f4">
      <Background title="Login">
        <InputText
          icon="email-outline"
          label="Email"
          type="email-address"
          containerStyle={styles.inputText}
          onChangeText={handleChange('email')}
          value={values.email}
          error={errors.includes('email')}
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

        <TouchableOpacity style={styles.signup} onPress={goToSignup}>
          <Text style={styles.textSignup}>{'Criar conta'}</Text>
        </TouchableOpacity>
        {authError && <Text style={styles.error}>{authError}</Text>}
      </Background>
    </Content>
  )
}

const mapForm = {
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
}

const enhancer = R.pipe(
  withFormik(mapForm),
  withNavigation
)

export default enhancer(Login)
