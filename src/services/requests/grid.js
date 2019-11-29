import moment from 'moment'
import momentTimezone from 'moment-timezone'
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
    const result = {
      ...data,
      data: {
        ...data.data,
        Alerts: data.data.Alerts.map(item => {
          const newDate = moment(item.date, 'YYYY-MM-DDTHH:mm:ssZ')
          return { ...item, date: newDate.format('YYYY-MM-DDTHH:mm:ssZ') }
        }),
      },
    }
    return result
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

export const addAlert = async (id, data) => {
  const user = await getItem('account')
  console.log({
    ...data,
    date: moment(data.date).format('YYYY-MM-DDTHH:mm:ssZ'),
  })
  return fetch(
    {
      method: 'post',
      url: `grid/${id}/add-alert`,
      data: {
        ...data,
        date: moment(data.date).format('YYYY-MM-DDTHH:mm:ssZ'),
      },
    },
    user.token
  )
}
