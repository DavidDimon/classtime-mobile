import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'react-native-elements'
import { Colors, borderShadow } from '@styles'

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  content: {
    height: 70,
  },
  bottomHeader: {
    height: 50,
    backgroundColor: '#69b0f4',
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 20,
  },
  menuHeader: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
    backgroundColor: Colors.white,
    position: 'absolute',
    alignSelf: 'center',
    top: 70,
    width: '92%',
    height: 90,
    ...borderShadow,
  },
})

const Header = ({ title, children, onPressRight }) => (
  <View style={styles.container}>
    <LinearGradient colors={['#3396F5', '#69b0f4']} style={styles.content}>
      <StatusBar backgroundColor="#3396F5" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Icon
            name="logout"
            type="material-community"
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    <View style={styles.bottomHeader} />
    <View style={styles.menuHeader}>{children}</View>
  </View>
)

export default Header
