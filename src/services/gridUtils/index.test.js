import moment from 'moment'
import { loadDates } from '@services/gridUtils'

const loadDatesMock = [
  {
    date: '21/06',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
  {
    date: '28/06',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
  {
    date: '05/07',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
]

describe('loadDates', () => {
  it('with null params', () => {
    expect(loadDates()).toStrictEqual([])
  })
  it('minDate param is string', () => {
    expect(loadDates(3, '21/06/2019')).toStrictEqual([])
  })
  it('with length = 3, minDate = 21/06/2019, alerts = []', () => {
    expect(loadDates(3, moment('21/06/2019', 'DD/MM/YYYY'))).toStrictEqual(
      loadDatesMock
    )
  })
})
