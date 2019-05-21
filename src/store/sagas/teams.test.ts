import { Action } from 'redux'
import { runSaga } from 'redux-saga'
import * as actions from '../actions/teams'
import { fetchTeams } from './teams'
import { mockTeams } from '../fixtures/teams'
import * as service from '../data/teams'

describe('fetchTeams saga', () => {
  const mock = jest.spyOn(service, 'fetchTeams')

  beforeAll(() => {
    mock.mockResolvedValue({
      status: 200,
      data: mockTeams
    })
  })

  afterAll(() => {
    mock.mockRestore()
  })

  it('sets fetched data to redux state', async () => {
    const dispatchedActions: Action[] = []

    const fakeStore = {
      getState: () => ({ test: 'test' }),
      dispatch: (action: any) => dispatchedActions.push(action)
    }

    await runSaga(fakeStore, fetchTeams, actions.fetchTeams()).toPromise()

    expect(dispatchedActions).toContainEqual(
      actions.fetchTeamsSuccess(mockTeams)
    )
  })

  it('dispatches error action', async () => {
    mock.mockRejectedValue({ message: 'Test Error' })

    const dispatchedActions: Action[] = []

    const fakeStore = {
      getState: () => ({ test: 'test' }),
      dispatch: (action: any) => dispatchedActions.push(action)
    }

    await runSaga(fakeStore, fetchTeams, actions.fetchTeams()).toPromise()

    expect(dispatchedActions).toContainEqual(
      actions.fetchTeamsFailure('Test Error')
    )
  })
})
