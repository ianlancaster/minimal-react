/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpBareSpec'

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
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('ToDos component', () => {
    const { ComponentWrapper, props } = setup()

    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('ToDos action creators', () => {
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('ToDos async actions', () => {
    const { fakeStore } = setup()

    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })

  context('ToDos reducer (action handlers)', () => {
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
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
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('${1:ToDos} component', () => {
    const { ComponentWrapper, props } = setup()

    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('${1:ToDos} action creators', () => {
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })


  context('${1:ToDos} async actions', () => {
    const { fakeStore } = setup()

    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })

  context('${1:ToDos} reducer (action handlers)', () => {
    it('should have at least one test', () => {
      expect(Boolean('I am a nerd')).to.deep.equal(true)
    })
  })
})


// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { Provider } from \'react-redux\'\nimport { expect } from \'chai\'\nimport { shallow, mount } from \'enzyme\'\nimport sinon from \'sinon\'\nimport configureMockStore from \'redux-mock-store\'\nimport thunk from \'redux-thunk\'\nimport Promise from \'promise-polyfill\'\n// Add Promise to window\nif (!window.Promise) {\n\twindow.Promise = Promise\n}\n\nimport ${1:ToDos}Container from \'./${1:ToDos}.container\'\nimport ${1:ToDos}Component from \'./${1:ToDos}.component\'\nimport ${2:toDos}Data from \'./${1:ToDos}.data\'\nimport ${2:toDos}Reducer, { fetch${1:ToDos}, request${1:ToDos}, receive${1:ToDos}, reveiveErr } from \'./${1:ToDos}.modules\'\n\ndescribe(\'${3:TODOS} TESTS\', () => {\n\tconst setup = () => {\n\t\tconst props = {\n\t\t\tfetch${1:ToDos}: sinon.spy(),\n\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t}\n\n\t\tconst newStore = configureMockStore([thunk])\n\n\t\tconst fakeStore = newStore({\n\t\t\t${2:toDos}: { ${2:toDos}: ${2:toDos}Data }\n\t\t})\n\n\t\tconst ContainerWrapper = mount(\n\t\t\t<Provider store={fakeStore}>\n\t\t\t\t<${1:ToDos}Container />\n\t\t\t</Provider>,\n\t\t).find(${1:ToDos}Container)\n\n\t\tconst ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)\n\n\t\treturn {\n\t\t\tContainerWrapper,\n\t\t\tComponentWrapper,\n\t\t\tprops,\n\t\t\tfakeStore\n\t\t}\n\t}\n\n\tcontext(\'${1:ToDos} container\', () => {\n\t\tconst { ContainerWrapper } = setup()\n\t\tit(\'should have at least one test\', () => {\n\t\t\texpect(Boolean(\'I am a nerd\')).to.deep.equal(true)\n\t\t})\n\t})\n\n\n\tcontext(\'${1:ToDos} component\', () => {\n\t\tconst { ComponentWrapper, props } = setup()\n\n\t\tit(\'should have at least one test\', () => {\n\t\t\texpect(Boolean(\'I am a nerd\')).to.deep.equal(true)\n\t\t})\n\t})\n\n\n\tcontext(\'${1:ToDos} action creators\', () => {\n\t\tit(\'should have at least one test\', () => {\n\t\t\texpect(Boolean(\'I am a nerd\')).to.deep.equal(true)\n\t\t})\n\t})\n\n\n\tcontext(\'${1:ToDos} async actions\', () => {\n\t\tconst { fakeStore } = setup()\n\n\t\tit(\'should have at least one test\', () => {\n\t\t\texpect(Boolean(\'I am a nerd\')).to.deep.equal(true)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} reducer (action handlers)\', () => {\n\t\tit(\'should have at least one test\', () => {\n\t\t\texpect(Boolean(\'I am a nerd\')).to.deep.equal(true)\n\t\t})\n\t})\n})\n'
