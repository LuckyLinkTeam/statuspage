export const componentStatuses = ['Operational', 'Under Maintenance', 'Degraded Performance', 'Partial Outage',
  'Major Outage']

export const getComponentColor = (status) => {
  switch (status) {
    case 'Operational':
      return '#58E2A2'
    case 'Under Maintenance':
      return '#1088E2'
    case 'Degraded Performance':
      return '#7E57C2'
    case 'Partial Outage':
      return '#FFD600'
    case 'Major Outage':
      return '#FF4E69'
    default:
      return '#96ACBF'
  }
}

export const incidentStatuses = ['Investigating', 'Identified', 'Monitoring', 'Resolved']

export const getIncidentColor = (impact) => {
  switch (impact) {
    case 'Investigating':
      return '#FF4E69'
    case 'Identified':
      return '#FFD600'
    case 'Monitoring':
      return '#1088E2'
    case 'Resolved':
      return '#58E2A2'
    default:
      return '#96ACBF'
  }
}

export const metricStatuses = ['Hidden', 'Visible']

export const getMetricColor = (impact) => {
  switch (impact) {
    case 'Visible':
      return '#58E2A2'
    case 'Hidden':
      return '#96ACBF'
    default:
      return '#96ACBF'
  }
}

export const maintenanceStatuses = ['Scheduled', 'In Progress', 'Verifying', 'Completed']

export const getMaintenanceColor = (impact) => {
  switch (impact) {
    case 'Scheduled':
      return '#1088E2'
    case 'In Progress':
      return '#FFD600'
    case 'Verifying':
      return '#7E57C2'
    case 'Completed':
      return '#58E2A2'
    default:
      return '#96ACBF'
  }
}

export const timeframeDay = 'Day'
export const timeframeWeek = 'Week'
export const timeframeMonth = 'Month'
export const timeframes = [timeframeDay, timeframeWeek, timeframeMonth]

export const getXAxisFormat = (timeframe) => {
  switch (timeframe) {
    case 'Day':
      return (x) => {
        if (x.getMinutes() >= 55) {
          return `${x.getHours() + 1}:00`
        }
        return `${x.getHours()}:${Math.round(x.getMinutes() / 10)}0`
        /*
        // Round minutes. It seems too vague.
        const inc = x.getMinutes() > 30 ? 1 : 0
        return `${x.getHours() + inc}:00`
        */
      }
    default:
      return (x) => { return `${x.getMonth() + 1}/${x.getDate()}` }
  }
}

export const getTooltipTitleFormat = (timeframe) => {
  switch (timeframe) {
    case 'Day':
      return (x) => {
        const padding = x.getMinutes() < 10 ? '0' : ''
        return `${x.getMonth() + 1}/${x.getDate()} - ${x.getHours()}:${padding}${x.getMinutes()}`
      }
    default:
      return (x) => { return `${x.getMonth() + 1}/${x.getDate()} - ${x.getHours()}:00` }
  }
}

export const getIncrementTimestampFunc = (timeframe) => {
  switch (timeframe) {
    case 'Day':
      return timestamp => timestamp.setMinutes(timestamp.getMinutes() + 5)
    case 'Week':
      return timestamp => timestamp.setHours(timestamp.getHours() + 1)
    default:
      return timestamp => timestamp.setHours(timestamp.getHours() + 3)
  }
}

export const getNumDates = (timeframe) => {
  switch (timeframe) {
    case 'Day':
      return 1
    case 'Week':
      return 7
    default:
      return 30
  }
}

export const regions = [
  {id: 'us-east-1', name: 'US East (N. Virginia)'},
  {id: 'us-east-2', name: 'US East (Ohio)'},
  {id: 'us-west-1', name: 'US West (N. California)'},
  {id: 'us-west-2', name: 'US West (Oregon)'},
  {id: 'ca-central-1', name: 'Canada (Central)'},
  {id: 'eu-west-1', name: 'EU (Ireland)'},
  {id: 'eu-central-1', name: 'EU (Frankfurt)'},
  {id: 'eu-west-2', name: 'EU (London)'},
  {id: 'ap-northeast-1', name: 'Asia Pacific (Tokyo)'},
  {id: 'ap-northeast-2', name: 'Asia Pacific (Seoul)'},
  {id: 'ap-southeast-1', name: 'Asia Pacific (Singapore)'},
  {id: 'ap-southeast-2', name: 'Asia Pacific (Sydney)'},
  {id: 'ap-south-1', name: 'Asia Pacific (Mumbai)'},
  {id: 'sa-east-1', name: 'South America (São Paulo)'}
]
