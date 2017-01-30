/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpFullSpec'

// ------------------------------------
// OUTPUT
// ------------------------------------
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

import ToDosContainer from './ToDos.container'
import ToDosComponent from './ToDos.component'
import toDosData from './ToDos.data'
import toDosReducer, { fetchToDos, requestToDos, receiveToDos, reveiveErr } from './ToDos.modules'

describe('TODOS TESTS', () => {
  const setup = () => {
    const props = {
      fetchToDos: sinon.spy(),
      toDos: toDosData,
    }

    const newStore = configureMockStore([thunk])

    const fakeStore = newStore({
      toDos: { toDos: toDosData }
    })

    const ContainerWrapper = mount(
      <Provider store={fakeStore}>
        <ToDosContainer />
      </Provider>,
    ).find(ToDosContainer)

    const ComponentWrapper = shallow(<ToDosComponent {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props,
      fakeStore
    }
  }

  context('ToDos container', () => {
    const { ContainerWrapper } = setup()
    it('should render the ToDos component', () => {
      expect(ContainerWrapper).to.exist
    })

    it('should render 20 toDos components when mounted', () => {
      expect(ContainerWrapper.find('article').length).to.equal(20)
    })
  })

  context('ToDos component', () => {
    const { ComponentWrapper, props } = setup()
    it('should call fetchToDos once when mounted', () => {
      expect(props.fetchToDos).to.have.property('callCount', 1)
    })

    it('should call fetchToDos again when props.appShouldFetchContent is changed to true', () => {
      expect(props.fetchToDos).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetchToDos).to.have.property('callCount', 2)
    })
  })

  context('ToDos action creators', () => {
    it('Should export five functions: fetchToDos, toDosReducer, reveiveErr, receiveToDos, requestToDos', () => {
      // imported at top of file
      expect(fetchToDos).to.be.a('function')
      expect(toDosReducer).to.be.a('function')
      expect(reveiveErr).to.be.a('function')
      expect(receiveToDos).to.be.a('function')
      expect(requestToDos).to.be.a('function')
    })

    it('requestToDos() should take no parameters and return a proper REQUEST_TODOS action object', () => {
      const expectedAction = {
        type: 'REQUEST_TODOS'
      }

      expect(requestToDos()).to.deep.equal(expectedAction)
    })

    it('receiveToDos() should take a toDos array as a parameter and return a proper RECEIVE_TODOS action object', () => {
      const expectedAction = {
        type: 'RECEIVE_TODOS',
        toDos: toDosData
      }

      expect(receiveToDos(toDosData)).to.deep.equal(expectedAction)
    })

    it('reveiveErr() should take no parameters and return a proper RECEIVE_ERR action object', () => {
      const expectedAction = {
        type: 'RECEIVE_ERR',
        err: 'test error'
      }

      expect(reveiveErr('test error')).to.deep.equal(expectedAction)
    })
  })

  context('ToDos async actions', () => {
    // note that this actually hits the toDos api. You probably want to set up nock or sinon.
    const { fakeStore } = setup()

    it('fetchToDos() should dispatch a REQUEST_TODOS action and a toDos-populated RECEIVE_TODOS action', () => {
      let expectedActions = [
        { type: 'REQUEST_TODOS' },
        { type: 'RECEIVE_TODOS', toDos: toDosData }
      ]

      return fakeStore.dispatch(fetchToDos())
        .then(() => Promise.resolve(fakeStore.getActions()))
        .then((resolved) => {
          expect(resolved[0]).to.deep.equal(expectedActions[0])
          expect(resolved[1].length).to.deep.equal(expectedActions[1].length)
        })
    })
  })

  context('ToDos reducer (action handlers)', () => {
    it('REQUEST_TODOS | should set fetching to true', () => {
      const REQUEST_TODOS = requestToDos()

      const initialState = {
        toDos: toDosData
      }

      const expectedState = {
        toDos: toDosData,
        fetching: true
      }

      expect(toDosReducer(initialState, REQUEST_TODOS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_TODOS | should append fetched toDos to the toDos array and set fetching to false', () => {
      const RECEIVE_TODOS = receiveToDos(toDosData)

      const initialState = {
        appShouldFetchContent: false,
        toDos: toDosData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        toDos: [ ...toDosData, ...toDosData ],
        fetching: false
      }

      expect(toDosReducer(initialState, RECEIVE_TODOS)).to.deep.equal(expectedState)
    })

    it('RECEIVE_ERR | should return the error and set fetching to false', () => {
      const RECEIVE_ERR = reveiveErr('test error')

      const initialState = {
        appShouldFetchContent: false,
        toDos: toDosData,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        toDos: toDosData,
        err: 'test error',
        fetching: false
      }

      expect(toDosReducer(initialState, RECEIVE_ERR)).to.deep.equal(expectedState)
    })
  })
})

// ------------------------------------
// INPUT
// ------------------------------------
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

import ${1:ToDos}Container from './${1:ToDos}.container'
import ${1:ToDos}Component from './${1:ToDos}.component'
import ${2:toDos}Data from './${1:ToDos}.data'
import ${2:toDos}Reducer, { fetch${1:ToDos}, request${1:ToDos}, receive${1:ToDos}, reveiveErr } from './${1:ToDos}.modules'

describe('${3:TODOS} TESTS', () => {
  const setup = () => {
    const props = {
      fetch${1:ToDos}: sinon.spy(),
      ${2:toDos}: ${2:toDos}Data,
    }

    const newStore = configureMockStore([thunk])

    const fakeStore = newStore({
      ${2:toDos}: { ${2:toDos}: ${2:toDos}Data }
    })

    const ContainerWrapper = mount(
      <Provider store={fakeStore}>
        <${1:ToDos}Container />
      </Provider>,
    ).find(${1:ToDos}Container)

    const ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)

    return {
      ContainerWrapper,
      ComponentWrapper,
      props,
      fakeStore
    }
  }

  context('${1:ToDos} container', () => {
    const { ContainerWrapper } = setup()
    it('should render the ${1:ToDos} component', () => {
      expect(ContainerWrapper).to.exist
    })

    it('should render 20 ${2:toDos} components when mounted', () => {
      expect(ContainerWrapper.find('article').length).to.equal(20)
    })
  })

  context('${1:ToDos} component', () => {
    const { ComponentWrapper, props } = setup()
    it('should call fetch${1:ToDos} once when mounted', () => {
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 1)
    })

    it('should call fetch${1:ToDos} again when props.appShouldFetchContent is changed to true', () => {
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 2)
    })
  })

  context('${1:ToDos} action creators', () => {
    it('Should export five functions: fetch${1:ToDos}, ${2:toDos}Reducer, reveiveErr, receive${1:ToDos}, request${1:ToDos}', () => {
      // imported at top of file
      expect(fetch${1:ToDos}).to.be.a('function')
      expect(${2:toDos}Reducer).to.be.a('function')
      expect(reveiveErr).to.be.a('function')
      expect(receive${1:ToDos}).to.be.a('function')
      expect(request${1:ToDos}).to.be.a('function')
    })

    it('request${1:ToDos}() should take no parameters and return a proper REQUEST_${3:TODOS} action object', () => {
      const expectedAction = {
        type: 'REQUEST_${3:TODOS}'
      }

      expect(request${1:ToDos}()).to.deep.equal(expectedAction)
    })

    it('receive${1:ToDos}() should take a ${2:toDos} array as a parameter and return a proper RECEIVE_${3:TODOS} action object', () => {
      const expectedAction = {
        type: 'RECEIVE_${3:TODOS}',
        ${2:toDos}: ${2:toDos}Data
      }

      expect(receive${1:ToDos}(${2:toDos}Data)).to.deep.equal(expectedAction)
    })

    it('reveiveErr() should take no parameters and return a proper RECEIVE_ERR action object', () => {
      const expectedAction = {
        type: 'RECEIVE_ERR',
        err: 'test error'
      }

      expect(reveiveErr('test error')).to.deep.equal(expectedAction)
    })
  })

  context('${1:ToDos} async actions', () => {
    // note that this actually hits the ${2:toDos} api. You probably want to set up nock or sinon.
    const { fakeStore } = setup()

    it('fetch${1:ToDos}() should dispatch a REQUEST_${3:TODOS} action and a ${2:toDos}-populated RECEIVE_${3:TODOS} action', () => {
      let expectedActions = [
        { type: 'REQUEST_${3:TODOS}' },
        { type: 'RECEIVE_${3:TODOS}', ${2:toDos}: ${2:toDos}Data }
      ]

      return fakeStore.dispatch(fetch${1:ToDos}())
        .then(() => Promise.resolve(fakeStore.getActions()))
        .then((resolved) => {
          expect(resolved[0]).to.deep.equal(expectedActions[0])
          expect(resolved[1].length).to.deep.equal(expectedActions[1].length)
        })
    })
  })

  context('${1:ToDos} reducer (action handlers)', () => {
    it('REQUEST_${3:TODOS} | should set fetching to true', () => {
      const REQUEST_${3:TODOS} = request${1:ToDos}()

      const initialState = {
        ${2:toDos}: ${2:toDos}Data
      }

      const expectedState = {
        ${2:toDos}: ${2:toDos}Data,
        fetching: true
      }

      expect(${2:toDos}Reducer(initialState, REQUEST_${3:TODOS})).to.deep.equal(expectedState)
    })

    it('RECEIVE_${3:TODOS} | should append fetched ${2:toDos} to the ${2:toDos} array and set fetching to false', () => {
      const RECEIVE_${3:TODOS} = receive${1:ToDos}(${2:toDos}Data)

      const initialState = {
        appShouldFetchContent: false,
        ${2:toDos}: ${2:toDos}Data,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        ${2:toDos}: [ ...${2:toDos}Data, ...${2:toDos}Data ],
        fetching: false
      }

      expect(${2:toDos}Reducer(initialState, RECEIVE_${3:TODOS})).to.deep.equal(expectedState)
    })

    it('RECEIVE_ERR | should return the error and set fetching to false', () => {
      const RECEIVE_ERR = reveiveErr('test error')

      const initialState = {
        appShouldFetchContent: false,
        ${2:toDos}: ${2:toDos}Data,
        fetching: true
      }

      const expectedState = {
        appShouldFetchContent: false,
        ${2:toDos}: ${2:toDos}Data,
        err: 'test error',
        fetching: false
      }

      expect(${2:toDos}Reducer(initialState, RECEIVE_ERR)).to.deep.equal(expectedState)
    })
  })
})


// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { Provider } from \'react-redux\'\nimport { expect } from \'chai\'\nimport { shallow, mount } from \'enzyme\'\nimport sinon from \'sinon\'\nimport configureMockStore from \'redux-mock-store\'\nimport thunk from \'redux-thunk\'\nimport Promise from \'promise-polyfill\'\n// Add Promise to window\nif (!window.Promise) {\n\twindow.Promise = Promise\n}\n\nimport ${1:ToDos}Container from \'./${1:ToDos}.container\'\nimport ${1:ToDos}Component from \'./${1:ToDos}.component\'\nimport ${2:toDos}Data from \'./${1:ToDos}.data\'\nimport ${2:toDos}Reducer, { fetch${1:ToDos}, request${1:ToDos}, receive${1:ToDos}, reveiveErr } from \'./${1:ToDos}.modules\'\n\ndescribe(\'${3:TODOS} TESTS\', () => {\n\tconst setup = () => {\n\t\tconst props = {\n\t\t\tfetch${1:ToDos}: sinon.spy(),\n\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t}\n\n\t\tconst newStore = configureMockStore([thunk])\n\n\t\tconst fakeStore = newStore({\n\t\t\t${2:toDos}: { ${2:toDos}: ${2:toDos}Data }\n\t\t})\n\n\t\tconst ContainerWrapper = mount(\n\t\t\t<Provider store={fakeStore}>\n\t\t\t\t<${1:ToDos}Container />\n\t\t\t</Provider>,\n\t\t).find(${1:ToDos}Container)\n\n\t\tconst ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)\n\n\t\treturn {\n\t\t\tContainerWrapper,\n\t\t\tComponentWrapper,\n\t\t\tprops,\n\t\t\tfakeStore\n\t\t}\n\t}\n\n\tcontext(\'${1:ToDos} container\', () => {\n\t\tconst { ContainerWrapper } = setup()\n\t\tit(\'should render the ${1:ToDos} component\', () => {\n\t\t\texpect(ContainerWrapper).to.exist\n\t\t})\n\n\t\tit(\'should render 20 ${2:toDos} components when mounted\', () => {\n\t\t\texpect(ContainerWrapper.find(\'article\').length).to.equal(20)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} component\', () => {\n\t\tconst { ComponentWrapper, props } = setup()\n\t\tit(\'should call fetch${1:ToDos} once when mounted\', () => {\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t})\n\n\t\tit(\'should call fetch${1:ToDos} again when props.appShouldFetchContent is changed to true\', () => {\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t\tComponentWrapper.setProps({ appShouldFetchContent: true })\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 2)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} action creators\', () => {\n\t\tit(\'Should export five functions: fetch${1:ToDos}, ${2:toDos}Reducer, reveiveErr, receive${1:ToDos}, request${1:ToDos}\', () => {\n\t\t\t// imported at top of file\n\t\t\texpect(fetch${1:ToDos}).to.be.a(\'function\')\n\t\t\texpect(${2:toDos}Reducer).to.be.a(\'function\')\n\t\t\texpect(reveiveErr).to.be.a(\'function\')\n\t\t\texpect(receive${1:ToDos}).to.be.a(\'function\')\n\t\t\texpect(request${1:ToDos}).to.be.a(\'function\')\n\t\t})\n\n\t\tit(\'request${1:ToDos}() should take no parameters and return a proper REQUEST_${3:TODOS} action object\', () => {\n\t\t\tconst expectedAction = {\n\t\t\t\ttype: \'REQUEST_${3:TODOS}\'\n\t\t\t}\n\n\t\t\texpect(request${1:ToDos}()).to.deep.equal(expectedAction)\n\t\t})\n\n\t\tit(\'receive${1:ToDos}() should take a ${2:toDos} array as a parameter and return a proper RECEIVE_${3:TODOS} action object\', () => {\n\t\t\tconst expectedAction = {\n\t\t\t\ttype: \'RECEIVE_${3:TODOS}\',\n\t\t\t\t${2:toDos}: ${2:toDos}Data\n\t\t\t}\n\n\t\t\texpect(receive${1:ToDos}(${2:toDos}Data)).to.deep.equal(expectedAction)\n\t\t})\n\n\t\tit(\'reveiveErr() should take no parameters and return a proper RECEIVE_ERR action object\', () => {\n\t\t\tconst expectedAction = {\n\t\t\t\ttype: \'RECEIVE_ERR\',\n\t\t\t\terr: \'test error\'\n\t\t\t}\n\n\t\t\texpect(reveiveErr(\'test error\')).to.deep.equal(expectedAction)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} async actions\', () => {\n\t\t// note that this actually hits the ${2:toDos} api. You probably want to set up nock or sinon.\n\t\tconst { fakeStore } = setup()\n\n\t\tit(\'fetch${1:ToDos}() should dispatch a REQUEST_${3:TODOS} action and a ${2:toDos}-populated RECEIVE_${3:TODOS} action\', () => {\n\t\t\tlet expectedActions = [\n\t\t\t\t{ type: \'REQUEST_${3:TODOS}\' },\n\t\t\t\t{ type: \'RECEIVE_${3:TODOS}\', ${2:toDos}: ${2:toDos}Data }\n\t\t\t]\n\n\t\t\treturn fakeStore.dispatch(fetch${1:ToDos}())\n\t\t\t\t.then(() => Promise.resolve(fakeStore.getActions()))\n\t\t\t\t.then((resolved) => {\n\t\t\t\t\texpect(resolved[0]).to.deep.equal(expectedActions[0])\n\t\t\t\t\texpect(resolved[1].length).to.deep.equal(expectedActions[1].length)\n\t\t\t\t})\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} reducer (action handlers)\', () => {\n\t\tit(\'REQUEST_${3:TODOS} | should set fetching to true\', () => {\n\t\t\tconst REQUEST_${3:TODOS} = request${1:ToDos}()\n\n\t\t\tconst initialState = {\n\t\t\t\t${2:toDos}: ${2:toDos}Data\n\t\t\t}\n\n\t\t\tconst expectedState = {\n\t\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t\t\tfetching: true\n\t\t\t}\n\n\t\t\texpect(${2:toDos}Reducer(initialState, REQUEST_${3:TODOS})).to.deep.equal(expectedState)\n\t\t})\n\n\t\tit(\'RECEIVE_${3:TODOS} | should append fetched ${2:toDos} to the ${2:toDos} array and set fetching to false\', () => {\n\t\t\tconst RECEIVE_${3:TODOS} = receive${1:ToDos}(${2:toDos}Data)\n\n\t\t\tconst initialState = {\n\t\t\t\tappShouldFetchContent: false,\n\t\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t\t\tfetching: true\n\t\t\t}\n\n\t\t\tconst expectedState = {\n\t\t\t\tappShouldFetchContent: false,\n\t\t\t\t${2:toDos}: [ ...${2:toDos}Data, ...${2:toDos}Data ],\n\t\t\t\tfetching: false\n\t\t\t}\n\n\t\t\texpect(${2:toDos}Reducer(initialState, RECEIVE_${3:TODOS})).to.deep.equal(expectedState)\n\t\t})\n\n\t\tit(\'RECEIVE_ERR | should return the error and set fetching to false\', () => {\n\t\t\tconst RECEIVE_ERR = reveiveErr(\'test error\')\n\n\t\t\tconst initialState = {\n\t\t\t\tappShouldFetchContent: false,\n\t\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t\t\tfetching: true\n\t\t\t}\n\n\t\t\tconst expectedState = {\n\t\t\t\tappShouldFetchContent: false,\n\t\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t\t\terr: \'test error\',\n\t\t\t\tfetching: false\n\t\t\t}\n\n\t\t\texpect(${2:toDos}Reducer(initialState, RECEIVE_ERR)).to.deep.equal(expectedState)\n\t\t})\n\t})\n})\n'
