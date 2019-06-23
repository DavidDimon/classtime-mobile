import moment from 'moment'
import fetch from '@services/fetch'
import { getItem } from '@services/db'

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const getGrid = async id => {
  const user = await getItem('account')
  try {
    const { data } = await fetch(
      {
        url: `grid/${id}`,
      },
      user.token
    )
    return data
  } catch (error) {
    console.warn(error)
  }
  return { data: [] }
}

export const getAlertsOfDay = async () => {
  const user = await getItem('account')
  try {
    const { data } = await fetch(
      {
        url: `alerts/${daysOfWeek[moment().day() - 1]}`,
      },
      user.token
    )
    return data
  } catch (error) {
    console.warn(error)
  }
  return { data: [] }
}
