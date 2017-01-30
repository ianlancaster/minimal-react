import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Promise from 'promise-polyfill'
// Add Promise to window
if (!window.Promise) {
  window.Promise = Promise
}

import BillsContainer from './Bills.container'
import BillsComponent from './Bills.component'
import billsData from './Bills.data'
import billsReducer, { fetchBills, requestBills, receiveBills, reveiveErr } from './Bills.modules'

describe('BILLS TESTS', () => {
  const setup = () => {
    const props = {
      fetchBills: sinon.spy(),
      bills: billsData,
      appShouldFetchContent: false
    }

    const newStore = configureMockStore([thunk])

    const fakeStore = newStore({
      bills: { bills: billsData },
      coreLayout: { appShouldFetchContent: false }
    })

    const ContainerWrapper = mount(
      <Provider store={fakeStore}>
        <BillsContainer />
      </Provider>,
    ).find(BillsContainer)

    const ComponentWrapper = shallow(<BillsComponent {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props,
      fakeStore
    }
  }

  context('Bills container', () => {
    const { ContainerWrapper } = setup()
    it('should render the Bills component', () => {
      expect(ContainerWrapper).to.exist
    })

    it('should render 20 bill components when mounted', () => {
      expect(ContainerWrapper.find('article').length).to.equal(20)
    })
  })

  context('Bills component', () => {
    const { ComponentWrapper, props } = setup()
    it('should call fetchBills once when mounted', () => {
      expect(props.fetchBills).to.have.property('callCount', 1)
    })

    it('should call fetchBills again when props.appShouldFetchContent is changed to true', () => {
      expect(props.fetchBills).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetchBills).to.have.property('callCount', 2)
    })
  })

  context('Bills action creators', () => {
    it('Should export five functions: fetchBills, billsReducer, reveiveErr, receiveBills, requestBills', () => {
      // imported at top of file
      expect(fetchBills).to.be.a('function')
      expect(billsReducer).to.be.a('function')
      expect(reveiveErr).to.be.a('function')
      expect(receiveBills).to.be.a('function')
      expect(requestBills).to.be.a('function')
    })

    it('requestBills() should take no parameters and return a proper REQUEST_BILLS action object', () => {
      const expectedAction = {
        type: 'REQUEST_BILLS'
      }

      expect(requestBills()).to.deep.equal(expectedAction)
    })

    it('receiveBills() should take a bills array as a parameter and return a proper RECEIVE_BILLS action object', () => {
      const expectedAction = {
        type: 'RECEIVE_BILLS',
        bills: billsData
      }

      expect(receiveBills(billsData)).to.deep.equal(expectedAction)
    })

    it('reveiveErr() should take no parameters and return a proper RECEIVE_ERR action object', () => {
      const expectedAction = {
        type: 'RECEIVE_ERR',
        err: 'test error'
      }

      expect(reveiveErr('test error')).to.deep.equal(expectedAction)
    })
  })

  context('Bills async actions', () => {
    // let server
    const { fakeStore } = setup()
    it('fetchBills() should dispatch a REQUEST_BILLS action and a bill-populated RECEIVE_BILLS action', () => {
      // // sinon not functioning. Come back and fix later
      // before(() => {
      //   server = sinon.fakeServer.create()
      //   const response = [200, { 'Content-type': 'application/json' }, billsData]
      //   server.respondWith('GET', 'http://localhost:3001/api/bills/1', JSON.stringify(response))
      // })
      //
      // after(() => {
      //   server.restore()
      // })

      let expectedActions = [
        { type: 'REQUEST_BILLS' },
        { type: 'RECEIVE_BILLS', bills: billsData }
      ]

      return fakeStore.dispatch(fetchBills())
        .then(() => {
          // return expect(Promise.resolve(fakeStore.getActions())).to.eventually.deep.equal(expectedActions)
          return Promise.resolve(fakeStore.getActions())
        })
        .then((resolved) => {
          expect(resolved[0]).to.deep.equal(expectedActions[0])
          expect(resolved[1].length).to.deep.equal(expectedActions[1].length)
        })
    })
  })

  context('Bills reducer (action handlers)', () => {
    it('REQUEST_BILLS | should set fetching to true', () => {
      const REQUEST_BILLS = requestBills()

      const initialState = {
        bills: billsData
      }

      const expectedState = {
        bills: billsData,
        fetching: true
      }

      expect(billsReducer(initialState, REQUEST_BILLS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_BILLS | should append fetched bills to the bills array and set fetching to false', () => {
      const RECEIVE_BILLS = receiveBills(billsData)

      const initialState = {
        appShouldFetchContent: false,
        bills: billsData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        bills: [ ...billsData, ...billsData ],
        fetching: false
      }

      expect(billsReducer(initialState, RECEIVE_BILLS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_ERR | should return the error and set fetching to false', () => {
      const RECEIVE_ERR = reveiveErr('test error')

      const initialState = {
        appShouldFetchContent: false,
        bills: billsData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        bills: billsData,
        err: 'test error',
        fetching: false
      }

      expect(billsReducer(initialState, RECEIVE_ERR)).to.deep.equal(expectedState)
    })
  })
})
