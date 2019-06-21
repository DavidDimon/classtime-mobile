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
