import { encode } from 'base-64'
import fetch from '@services/fetch'
import { setItem, getItem, removeItem } from '@services/db'
import { showConfirm } from '@services/alert'

const getHeaders = user => {
  return `Basic ${encode(`${user.username}:${user.password}`)}`
}

export const authenticate = async ({ username, password }) => {
  const auth = getHeaders({ username, password })

  const { data } = await fetch({
    url: `user/login`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
  setItem('account', data.user)
}

export const onLogout = navigation =>
  showConfirm('Logout', 'Você deseja se deslogar do aplicativo?', () => {
    removeItem('account')
    removeItem('services')
    navigation.navigate('authLoading')
  })

export const getUser = () => getItem('account')
