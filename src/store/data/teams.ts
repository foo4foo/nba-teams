import { get } from '../../lib/api'

const apiPrefix = '/teams'

const fetchTeams = (query?: any) => get(`${apiPrefix}/`, query)

export { fetchTeams }
