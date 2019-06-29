import moment from 'moment'
import { loadDates } from '@services/gridUtils'

const loadDatesMock = [
  {
    date: '21/06/2019',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
  {
    date: '28/06/2019',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
  {
    date: '05/07/2019',
    day: 'Sexta-feira',
    countAlerts: 0,
  },
]

describe('loadDates', () => {
  it('with null params', () => {
    expect(loadDates()).toStrictEqual([])
  })
  it('with minDate = 21/06/2019, alerts = []', () => {
    expect(
      loadDates(
        moment('21/06/2019', 'DD/MM/YYYY'),
        moment('05/07/2019', 'DD/MM/YYYY')
      )
    ).toStrictEqual(loadDatesMock)
  })
})
