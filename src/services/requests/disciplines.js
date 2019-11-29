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
      url: `discipline/create`,
      data: {
        ...data,
        beginAt: moment(data.beginAt).format('YYYY-MM-DDTHH:mm:ssZ'),
        endAt: moment(data.endAt).format('YYYY-MM-DDTHH:mm:ssZ'),
      },
    },
    user.token
  )
}

export const updateClassroom = async (id, classroom) => {
  const user = await getItem('account')
  return fetch(
    {
      method: 'put',
      url: `discipline/${id}/classroom`,
      data: {classroom}
    },
    user.token
  )
}
