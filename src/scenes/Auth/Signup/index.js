import React, { useState, useCallback } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { withFormik } from 'formik'
import { withNavigation } from 'react-navigation'
import * as R from 'ramda'

import { Content, InputText, Button } from '@components'
import { Background } from '../components'
import { styles } from './styles'

import { signup } from '@services/auth'

const validate = (values, setErrors) => {
  const errors = []
  Object.keys(values).map(key => !values[key] && errors.push(key))
  setErrors(errors)
  return errors && !!errors.length
}

const Signup = ({ values, handleChange, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const onSignup = useCallback(async () => {
    setLoading(true)
    try {
      if (validate(values, setErrors)) {
        setLoading(false)
        return
      }

      const {
        data: { user },
      } = await signup(values)

      navigation.navigate('login', { email: user.email })
    } catch (error) {
      console.warn(error)
      setLoading(false)
    }
  }, [values])

  const goToLogin = useCallback(() => navigation.navigate('login'), [])

  return (
    <Content notchColor="#69b0f4">
      <Background title="Criar conta">
        <InputText
          icon="account"
          label="Nome"
          containerStyle={styles.inputText}
          onChangeText={handleChange('name')}
          value={values.name}
          error={errors.includes('name')}
        />

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
          icon="file-document-outline"
          label="Matrícula"
          containerStyle={styles.inputText}
          onChangeText={handleChange('studentId')}
          value={values.studentId}
          error={errors.includes('studentId')}
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
          title={'Criar conta'}
          isLoading={loading}
          onPress={onSignup}
        />

        <TouchableOpacity style={styles.signup} onPress={goToLogin}>
          <Text style={styles.textSignup}>{'Voltar para o login'}</Text>
        </TouchableOpacity>
      </Background>
    </Content>
  )
}

const mapForm = {
  mapPropsToValues: () => ({
    email: '',
    name: '',
    studentId: '',
    password: '',
  }),
}

const enhancer = R.pipe(
  withFormik(mapForm),
  withNavigation
)

export default enhancer(Signup)
