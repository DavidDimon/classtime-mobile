import React, { useState, useCallback } from 'react'
import * as R from 'ramda'
import moment from 'moment'
import { withFormik } from 'formik'
import { withNavigation } from 'react-navigation'

import { ScrollView, Text } from 'react-native'
import { Content, Header, DatePicker, InputText, Button } from '@components'
import { Colors } from '@styles'
import { styles } from './styles'
import { addAlert } from '@services/requests/grid'

const validate = (values, setErrors) => {
  const errors = []
  Object.keys(values).map(key => {
    if (!values[key] || (Array.isArray(values[key]) && !values[key].length)) {
      errors.push(key)
    }
  })
  setErrors(errors)
  return errors && !!errors.length
}

const AlertForm = ({ values, navigation, handleChange, ...props }) => {
  const [discipline, setDiscipline] = useState(
    navigation.getParam('discipline')
  )
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const onChange = useCallback(
    (name, value) => props.setFieldValue(name, value),
    []
  )

  const onSave = useCallback(async () => {
    setLoading(true)
    try {
      if (validate(values, setErrors)) {
        setLoading(false)
        return
      }

      await addAlert(discipline.Grid.ID, values)
      setLoading(false)
      navigation.navigate('discipline', { discipline, reset: true })
    } catch (error) {
      console.warn(error)
      setLoading(false)
    }
  }, [values])

  return (
    <Content notchColor={Colors.blue}>
      <Header title="Criar novo alerta" />
      <ScrollView style={styles.content}>
        <DatePicker
          label="Data do alerta"
          mode="datetime"
          name="date"
          value={values.date}
          onChange={onChange}
        />
        <InputText
          label="Mensagem"
          onChangeText={handleChange('message')}
          value={values.message}
          error={errors.includes('message')}
          required
          textarea
        />
      </ScrollView>

      {errors.includes('error') && (
        <Text style={styles.error}>{'Falha ao criar o alerta'}</Text>
      )}

      <Button
        title="Salvar"
        isLoading={loading}
        style={styles.button}
        onPress={onSave}
      />
    </Content>
  )
}

const mapForm = {
  mapPropsToValues: () => ({
    message: '',
    date: moment(),
  }),
}

const enhancer = R.pipe(
  withNavigation,
  withFormik(mapForm)
)

export default enhancer(AlertForm)
