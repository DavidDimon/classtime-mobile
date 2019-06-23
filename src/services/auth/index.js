import { encode } from 'base-64'
import fetch from '@services/fetch'
import { setItem, getItem, removeItem } from '@services/db'
import { showConfirm } from '@services/alert'

const getHeaders = user => {
  return `Basic ${encode(`${user.email}:${user.password}`)}`
}

export const authenticate = async ({ email, password }) => {
  const auth = getHeaders({ email, password })

  const { data } = await fetch({
    url: `user/login`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  })
  setItem('account', data.user)
}

export const signup = async params =>
  fetch({
    url: `user/create`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  })

export const onLogout = navigation =>
  showConfirm('Logout', 'Você deseja se deslogar do aplicativo?', () => {
    removeItem('account')
    removeItem('services')
    navigation.navigate('authLoading')
  })

export const getUser = () => getItem('account')
