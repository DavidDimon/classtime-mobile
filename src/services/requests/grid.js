import fetch from '@services/fetch'
import { getItem } from '@services/db'

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
