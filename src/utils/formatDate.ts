import { format, parseISO } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz';

export default function formatDate(date: Date): string {
  const dateIso = parseISO(date.toString())
  const znDate = zonedTimeToUtc(dateIso, 'America/Sao_Paulo')
  const dateFormatd = format(znDate, 'dd/MM/yyyy HH:mm')

  return dateFormatd
}
