import moment from 'moment'

const daysOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Sexta-feira',
  'Sábado',
]

export const loadDates = (minDate, maxDate, alerts) => {
  if (!minDate || !maxDate) return []
  const length = maxDate.diff(minDate, 'week') + 1
  return length > 0 && minDate instanceof moment
    ? [...Array(length).keys()].map((item, index) => {
        const date = index === 0 ? minDate.utc() : minDate.utc().add(7, 'days')
        return {
          date: date.format('DD/MM/YYYY'),
          day: daysOfWeek[date.day() -1],
          countAlerts:
            alerts && alerts[date.utc().format('DD/MM/YYYY')]
              ? alerts[date.utc().format('DD/MM/YYYY')].length
              : 0,
        }
      })
    : []
}
