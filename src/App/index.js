import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from '@services/navigator'

const App = () => [
  <StatusBar key="1" backgroundColor="#69b0f4" barStyle="light-content" />,
  <Navigator key={'app-navigator'} key="2" />,
]

const Client = () => <App />

export default Client
