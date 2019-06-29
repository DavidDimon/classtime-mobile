import moment from 'moment'
import fetch from '@services/fetch'
import { getItem } from '@services/db'

export const getDisciplines = async params => {
  const user = await getItem('account')
  try {
    const { data } = await fetch(
      {
        url: `disciplines`,
        params,
      },
      user.token
    )
    return data
  } catch (error) {
    console.warn(error)
  }
  return { data: [] }
}

export const saveDiscipline = async data => {
  const user = await getItem('account')
  return fetch(
    {
      method: 'post',
      url: `disciplines/create`,
      data: {
        ...data,
        beginAt: moment(data.beginAt).format('DD/MM/YYYY'),
        endAt: moment(data.endAt).format('DD/MM/YYYY'),
      },
    },
    user.token
  )
}
