import moment from 'moment'

const daysOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Sexta-feira',
  'Sábado',
]

export const loadDates = (length = 0, minDate, alerts = []) =>
  length > 0 && minDate instanceof moment
    ? [...Array(length).keys()].map((item, index) => {
        const date = index === 0 ? minDate : minDate.add(7, 'days')
        return {
          date: date.format('DD/MM'),
          day: daysOfWeek[date.day() - 1],
          countAlerts: alerts.length,
        }
      })
    : []

export const getNextDate = date => {
  const parsed = moment(date)
  const now = moment(date).day() - 7
  const days = now + moment(date).day()
  return parsed.add(days, 'days')
}
