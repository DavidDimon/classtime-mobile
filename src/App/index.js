import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from '@services/navigator'

const App = () => [
  <StatusBar key="1" backgroundColor="#fff" barStyle="dark-content" />,
  <Navigator key={'app-navigator'} key="2" />,
]

const Client = () => <App />

export default Client
