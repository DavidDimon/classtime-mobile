import React, { useState, useMemo, useEffect } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { Colors } from '@styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    height: 40,
    borderColor: Colors.silver,
  },
  label: {
    paddingLeft: 4,
    paddingTop: 10,
    color: '#777',
  },
  inputText: {
    flexDirection: 'row',
    paddingLeft: 5,
  },
  containerLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconHide: {
    alignSelf: 'center',
  },
  iconStyle: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
})

const getWidthInput = (hasIcon, isPassword) => {
  if (hasIcon && isPassword) {
    return '84%'
  }
  if (hasIcon || isPassword) {
    return '94%'
  }
  if (!hasIcon && !isPassword) {
    return '98%'
  }
}

const InputText = ({
  label,
  value,
  onChangeText,
  required,
  mask,
  type,
  error,
  containerStyle,
  placeholder,
  icon,
  typeIcon,
  textarea,
}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const widthInput = useMemo(() => getWidthInput(!!icon, type === 'password'), [
    icon,
    type,
  ])
  const requiredLabel = required ? (
    <Text style={[styles.label, { color: 'red' }]}>{'*'}</Text>
  ) : (
    <View />
  )

  let animatable = animatable || null

  useEffect(() => {
    if (!!error) {
      animatable.shake(500)
    }
  }, [error])

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && (
        <View style={styles.containerLabel}>
          <Text style={styles.label}>{label}</Text>
          {requiredLabel}
        </View>
      )}
      <Animatable.View
        ref={ref => (animatable = ref)}
        style={[
          styles.content,
          {
            borderColor: error ? 'red' : Colors.grayLight,
            height: textarea ? 100 : 35,
          },
        ]}
      >
        {icon && (
          <View style={styles.iconStyle}>
            <Icon name={icon} type={typeIcon} color={Colors.silver} size={15} />
          </View>
        )}

        <TextInput
          style={[
            styles.inputText,
            {
              color: '#000',
              width: widthInput,
            },
          ]}
          placeholder={placeholder}
          underlineColorAndroid={'transparent'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password' && hidePassword}
          keyboardType={type !== 'password' ? type : 'default'}
          multiline={textarea}
          numberOfLines={textarea ? 4 : 1}
        />

        {type === 'password' && (
          <TouchableOpacity
            style={styles.iconHide}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Icon
              name="eye"
              type="material-community"
              color={hidePassword ? Colors.silver : '#000'}
              size={15}
            />
          </TouchableOpacity>
        )}
      </Animatable.View>
    </View>
  )
}

InputText.defaultProps = {
  required: false,
  password: false,
  textarea: false,
  typeIcon: 'material-community',
  type: 'default',
}

export default InputText
