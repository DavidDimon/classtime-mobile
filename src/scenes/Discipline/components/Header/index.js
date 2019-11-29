import React, { useCallback, useState, useEffect } from 'react'
import { withNavigation, NavigationActions } from 'react-navigation'

import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { getItem } from '@services/db'

const styleTab = (tab, tabSelected) =>
  tab === tabSelected ? { borderBottomWidth: 5, borderColor: '#fff' } : {}

const Header = ({
  discipline,
  tabSelected,
  onChangeTab,
  navigation,
  updateClassroom,
}) => {
  const [user, setUser] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [classroom, setClassroom] = useState(discipline.classroom)
  const loadUser = useCallback(async () => {
    const result = await getItem('account')
    setUser(result)
  }, [])

  useEffect(() => {
    setClassroom(discipline.classroom)
  }, [discipline])

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <LinearGradient style={styles.content} colors={['#3396F5', '#69b0f4']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.dispatch(NavigationActions.back())}
        >
          <Icon
            name="arrow-left"
            type="material-community"
            color="#fff"
            size={20}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{discipline.name}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('alertForm', { discipline })}
        >
          <Icon
            name="comment-plus"
            type="material-community"
            color="#fff"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.classroomView}>
        {isEdit ? (
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[styles.classroomText, { marginRight: 5 }]}
            >{`Sala:`}</Text>
            <TextInput
              value={classroom}
              onChangeText={value => setClassroom(value)}
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                marginRight: 10,
              }}
            />
          </View>
        ) : (
          <Text style={styles.classroomText}>{`Sala: ${classroom ||
            discipline.classroom}`}</Text>
        )}
        {user.role >= 1 && (
          <View style={{ flexDirection: 'row' }}>
            {isEdit && (
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => setIsEdit(false)}
              >
                <Icon
                  name="close"
                  type="material-community"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                if(isEdit){
                  updateClassroom(classroom)
                  setIsEdit(false)
                  return
                }
                setIsEdit(true)
              }}
            >
              <Icon
                name={isEdit ? 'check' : 'pencil'}
                type="material-community"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.tabView}>
        <TouchableOpacity
          style={[styles.tabButton, { ...styleTab('alerts', tabSelected) }]}
          onPress={() => onChangeTab('alerts')}
        >
          <Text style={styles.text}>{'Alertas'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, { ...styleTab('users', tabSelected) }]}
          onPress={() => onChangeTab('users')}
        >
          <Text style={styles.text}>{'Participantes'}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default withNavigation(Header)
