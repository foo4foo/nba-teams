import request from './request'

export const get = (
  path: string,
  query?: object,
  headers?: { [key: string]: string }
): Promise<any> => {
  return request({ path, query, method: 'GET', headers })
}
