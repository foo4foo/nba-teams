import { get } from '../../lib/api'

const apiPrefix = '/teams'

export const fetchTeams = (data?: any) => get(`${apiPrefix}/`, data)
