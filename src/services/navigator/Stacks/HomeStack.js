import { createStackNavigator } from 'react-navigation'
import transitionConfig from '../transitionConfig'
import Home from '@scenes/Home'
import Discipline from '@scenes/Discipline'
import AlertForm from '@scenes/AlertForm'
import DisciplineForm from '@scenes/DisciplineForm'

const HomeStack = createStackNavigator(
  {
    home: Home,
    discipline: Discipline,
    alertForm: AlertForm,
    disciplineForm: DisciplineForm,
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
