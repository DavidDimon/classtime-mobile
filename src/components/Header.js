import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation, NavigationActions } from 'react-navigation'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, borderShadow } from '@styles'

const styles = StyleSheet.create({
  header: {
    height: 40,
    justifyContent: 'center',
    ...borderShadow,
  },
  content: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  midColumn: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: Colors.white,
    alignSelf: 'center',
    marginBottom: 5,
  },
  button: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 5,
  },
})

const Header = ({
  navigation,
  title,
  onPressLeft,
  onPressRight,
  iconLeft,
  iconRight,
  typeIconRight,
  typeIconLeft,
  showBackButton,
}) => (
  <LinearGradient style={styles.header} colors={['#3396F5', '#69b0f4']}>
    <View style={styles.content}>
      {showBackButton || onPressLeft ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            onPressLeft() || navigation.dispatch(NavigationActions.back())
          }
        >
          <Icon
            name={iconLeft}
            type={typeIconLeft}
            color={Colors.grayLight}
            size={20}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.button} />
      )}

      <Text style={styles.title}>{title}</Text>

      {onPressRight ? (
        <TouchableOpacity onPress={onPressRight} style={styles.button}>
          <Icon
            type={typeIconRight}
            size={20}
            name={iconRight}
            color={Colors.grayLight}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.button} />
      )}
    </View>
  </LinearGradient>
)

Header.defaultProps = {
  onPressRight: null,
  showBackButton: true,
  iconLeft: 'arrow-left',
  typeIconRight: 'material-community',
  typeIconLeft: 'material-community',
}

export default withNavigation(Header)
