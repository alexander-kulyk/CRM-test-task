export interface IPipelineStat {
  value: string
  label: string
}

export const PIPELINE_STATS: IPipelineStat[] = [
  { value: '12', label: 'New leads' },
  { value: '5', label: 'Qualified' },
  { value: '3', label: 'Calls booked' },
]
