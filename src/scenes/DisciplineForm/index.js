import React, { useState, useCallback } from 'react'
import { ScrollView, Text } from 'react-native'
import { withNavigation, NavigationActions } from 'react-navigation'
import { withFormik } from 'formik'
import * as R from 'ramda'
import moment from 'moment'

import { Content, Header, InputText, DatePicker, Button } from '@components'
import { SelectDays } from './components'
import { Colors } from '@styles'
import { styles } from './styles'
import { saveDiscipline } from '@services/requests/disciplines'

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

const DisciplineForm = ({ navigation, values, handleChange, ...props }) => {
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const onChange = useCallback(
    (name, value) => props.setFieldValue(name, value),
    []
  )

  const onSelect = useCallback(
    day =>
      props.setFieldValue(
        'weekDays',
        values.weekDays.includes(day)
          ? values.weekDays.filter(item => item !== day)
          : [...values.weekDays, day]
      ),
    [values]
  )

  const onSave = useCallback(async () => {
    setLoading(true)
    try {
      if (validate(values, setErrors)) {
        setLoading(false)
        return
      }
      await saveDiscipline(values)
      setLoading(false)
      navigation.dispatch(NavigationActions.back())
    } catch (error) {
      console.warn(error)
      setLoading(false)
    }
  }, [values])

  return (
    <Content notchColor={Colors.blue}>
      <Header title="Criar nova aula" />

      <ScrollView style={styles.content}>
        <InputText
          label="Nome"
          onChangeText={handleChange('name')}
          value={values.name}
          error={errors.includes('name')}
        />

        <InputText
          label="Semestre/ano"
          onChangeText={handleChange('term')}
          value={values.term}
          error={errors.includes('term')}
        />

        <InputText
          label="Sala padrão"
          onChangeText={handleChange('classroom')}
          value={values.classroom}
          error={errors.includes('classroom')}
        />

        <SelectDays
          label="Dias da semana"
          value={values.weekDays}
          onSelect={onSelect}
        />

        <DatePicker
          label="Início"
          name="beginAt"
          value={values.beginAt}
          onChange={onChange}
          mode="date"
        />

        <DatePicker
          label="Fim"
          name="endAt"
          value={values.endAt}
          onChange={onChange}
          mode="date"
        />
      </ScrollView>

      {errors.includes('weekDays') && (
        <Text style={styles.error}>
          {'Selecione ao menos um dia da semana'}
        </Text>
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
    name: '',
    classroom: '',
    term: '',
    weekDays: [],
    beginAt: moment(),
    endAt: moment().add(6, 'month'),
  }),
}

const enhancer = R.pipe(
  withNavigation,
  withFormik(mapForm)
)

export default enhancer(DisciplineForm)
