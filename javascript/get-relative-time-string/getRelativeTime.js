/**
 * 
 * @param {number | Date} date 
 * @param {String} lang 
 */
export function getRelativeTimeString(date, lang) {
  const timeMs = typeof date === 'number' ? date : date.getTime()
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity]
  const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

  const rtf = new Intl.RelativeTimeFormat(lang, {numeric: 'auto'})

  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}

console.log( // 59 sec ago
  getRelativeTimeString(new Date('2023-02-01T15:56:05'), 'en')
);