import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions/tripActions'
import * as t from './actions/actionTypes'
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
 
  it('creates ADD_TRIP after trip has been added', () => {
    fetchMock
      .getOnce('/api/trips', { body: { trips: [{id: 2, location: "Greece", notes: "A note", date: "2020", user_id: 1 }] }, headers: { 'content-type': 'application/json' } } )
 
    const expectedActions = [
      { type: t.LOAD_TRIPS, payload: { trips: [{id: 2, location: "Greece", notes: "A note", date: "2020", user_id: 1 }] } }
    ]
    const store = mockStore({ trips: [] })

    return store.dispatch(actions.getTrips()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})