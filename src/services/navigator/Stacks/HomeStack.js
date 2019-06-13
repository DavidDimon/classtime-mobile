import { createStackNavigator } from 'react-navigation'
import transitionConfig from '../transitionConfig'
import Home from '@scenes/Home'

const HomeStack = createStackNavigator(
  {
    home: Home,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      header: null,
    },
    transitionConfig,
  }
)

export default HomeStack
