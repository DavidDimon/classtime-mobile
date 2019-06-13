import * as R from 'ramda'
import fetch from '@services/fetch'
import { setItem, removeItem } from '@services/db'
import { showConfirm } from '@services/alert'

const authenticate = async ({ username, password }) => {
  const { data } = await fetch({
    method: 'post',
    url: `user/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email: username, password },
  })
  setItem('account', R.omit(['password'], data.user))
}

const onLogout = navigation =>
  showConfirm('Logout', 'Você deseja se deslogar do aplicativo?', () => {
    removeItem('account')
    removeItem('services')
    navigation.navigate('authLoading')
  })

export { authenticate, onLogout }
