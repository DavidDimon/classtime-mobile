import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation'
import transitionConfig from './transitionConfig'
import { HomeStack } from './Stacks'
import Login from '@scenes/Login'
import AuthLoading from '@scenes/AuthLoading'

const unathenticated = createStackNavigator(
  {
    login: Login,
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      header: null,
    },
    transitionConfig,
  }
)

const authenticated = createStackNavigator({
  home: HomeStack,
})

const mainNavigator = createSwitchNavigator(
  {
    authLoading: AuthLoading,
    app: authenticated,
    auth: unathenticated,
  },
  {
    initialRouteName: 'authLoading',
  }
)

export default createAppContainer(mainNavigator)
