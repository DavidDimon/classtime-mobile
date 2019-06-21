import { createStackNavigator } from 'react-navigation'
import transitionConfig from '../transitionConfig'
import Home from '@scenes/Home'
import Discipline from '@scenes/Discipline'

const HomeStack = createStackNavigator(
  {
    home: Home,
    discipline: Discipline,
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
