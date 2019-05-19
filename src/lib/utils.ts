export const qs = (params: { [key: string]: any }) => {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&')
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const createReducer = (initialState: any, handlers: any) => {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
