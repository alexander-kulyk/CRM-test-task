export const toDateString = (date: Date): string =>
  date.toISOString().slice(0, 10)

export const getDateWithOffset = (days: number): string => {
  const date = new Date()
  date.setDate(date.getDate() + days)

  return toDateString(date)
}
