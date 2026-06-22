//core
import type React from 'react'
import { useTheme } from 'styled-components'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
//other
import type { IEventTrendPoint } from '../config'
import * as S from './styled'

interface IEventTrendChartProps {
  data: IEventTrendPoint[]
}

export const EventTrendChart: React.FC<IEventTrendChartProps> = ({ data }) => {
  const theme = useTheme()

  const axisTick = { fill: theme.colors.textMuted, fontSize: 12 }

  return (
    <S.ChartFrame>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
          <CartesianGrid stroke={theme.colors.gridLine} vertical={false} />
          <XAxis dataKey="month" tick={axisTick} stroke={theme.colors.border} />
          <YAxis yAxisId="attendees" tick={axisTick} stroke={theme.colors.border} />
          <YAxis
            yAxisId="events"
            orientation="right"
            tick={axisTick}
            stroke={theme.colors.border}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="attendees"
            dataKey="attendees"
            name="Attendees"
            fill={theme.colors.primary}
            radius={[4, 4, 0, 0]}
          />
          <Line
            yAxisId="events"
            dataKey="events"
            name="Events"
            stroke={theme.colors.accent}
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </S.ChartFrame>
  )
}
