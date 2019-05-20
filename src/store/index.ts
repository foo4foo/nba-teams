import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import teamsSaga from './sagas/teams'
import { ITeamsState } from './reducers/teams'

const sagaMiddleware = createSagaMiddleware()

const middlewares: Array<any> = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
  middlewares.push(composeWithDevTools)
}

const enhancers = compose(applyMiddleware(...middlewares))

const store = createStore(rootReducer, enhancers)

export interface IStore {
  teams: ITeamsState
}

export default store

sagaMiddleware.run(teamsSaga)
