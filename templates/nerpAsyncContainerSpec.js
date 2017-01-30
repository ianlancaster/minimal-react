/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpAsyncContainerSpec'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React from 'react'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'

import ToDosContainer from './ToDos.container'
import ToDosComponent from './ToDos.component'
import toDosData from './ToDos.data'
import toDosReducer, { getToDos } from './ToDos.modules'

describe('TODOS TESTS', () => {
  const setup = () => {
    const props = {
      getToDos: sinon.spy(),
      toDos: toDosData,
    }

    const newStore = configureMockStore([])

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
    it('should call getToDos once when mounted', () => {
      expect(props.getToDos).to.have.property('callCount', 1)
    })

    it('should call getToDos again when props.appShouldgetContent is changed to true', () => {
      expect(props.getToDos).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldgetContent: true })
      expect(props.getToDos).to.have.property('callCount', 2)
    })
  })

  context('ToDos action creators', () => {
    it('Should export two functions: getToDos, toDosReducer', () => {
      // imported at top of file
      expect(getToDos).to.be.a('function')
      expect(toDosReducer).to.be.a('function')
    })

    it('getToDos() should take a toDos array as a parameter and return a proper RECEIVE_TODOS action object', () => {
      const expectedAction = {
        type: 'RECEIVE_TODOS',
        toDos: toDosData
      }

      expect(getToDos(toDosData)).to.deep.equal(expectedAction)
    })
  })

  context('ToDos reducer (action handlers)', () => {
    it('GET_TODOS | should append geted toDos to the toDos array and set geting to false', () => {
      const GET_TODOS = receiveToDos(toDosData)

      const initialState = {
        appShouldgetContent: false,
        toDos: toDosData,
        geting: true
      }

      const expectedState = {
        appShouldgetContent: false,
        toDos: [ ...toDosData, ...toDosData ],
        geting: false
      }

      expect(toDosReducer(initialState, GET_TODOS)).to.deep.equal(expectedState)
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

import ${1:ToDos}Container from './${1:ToDos}.container'
import ${1:ToDos}Component from './${1:ToDos}.component'
import ${2:toDos}Data from './${1:ToDos}.data'
import ${2:toDos}Reducer, { get${1:ToDos} } from './${1:ToDos}.modules'

describe('${3:TODOS} TESTS', () => {
  const setup = () => {
    const props = {
      get${1:ToDos}: sinon.spy(),
      ${2:toDos}: ${2:toDos}Data,
    }

    const newStore = configureMockStore([])

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
    it('should call get${1:ToDos} once when mounted', () => {
      expect(props.get${1:ToDos}).to.have.property('callCount', 1)
    })

    it('should call get${1:ToDos} again when props.appShouldgetContent is changed to true', () => {
      expect(props.get${1:ToDos}).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldgetContent: true })
      expect(props.get${1:ToDos}).to.have.property('callCount', 2)
    })
  })

  context('${1:ToDos} action creators', () => {
    it('Should export two functions: get${1:ToDos}, ${2:toDos}Reducer', () => {
      // imported at top of file
      expect(get${1:ToDos}).to.be.a('function')
      expect(${2:toDos}Reducer).to.be.a('function')
    })

    it('get${1:ToDos}() should take a ${2:toDos} array as a parameter and return a proper RECEIVE_${3:TODOS} action object', () => {
      const expectedAction = {
        type: 'RECEIVE_${3:TODOS}',
        ${2:toDos}: ${2:toDos}Data
      }

      expect(get${1:ToDos}(${2:toDos}Data)).to.deep.equal(expectedAction)
    })
  })

  context('${1:ToDos} reducer (action handlers)', () => {
    it('GET_${3:TODOS} | should append geted ${2:toDos} to the ${2:toDos} array and set geting to false', () => {
      const GET_${3:TODOS} = receive${1:ToDos}(${2:toDos}Data)

      const initialState = {
        appShouldgetContent: false,
        ${2:toDos}: ${2:toDos}Data,
        geting: true
      }

      const expectedState = {
        appShouldgetContent: false,
        ${2:toDos}: [ ...${2:toDos}Data, ...${2:toDos}Data ],
        geting: false
      }

      expect(${2:toDos}Reducer(initialState, GET_${3:TODOS})).to.deep.equal(expectedState)
    })
  })
})


// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { Provider } from \'react-redux\'\nimport { expect } from \'chai\'\nimport { shallow, mount } from \'enzyme\'\nimport sinon from \'sinon\'\nimport configureMockStore from \'redux-mock-store\'\n\nimport ${1:ToDos}Container from \'./${1:ToDos}.container\'\nimport ${1:ToDos}Component from \'./${1:ToDos}.component\'\nimport ${2:toDos}Data from \'./${1:ToDos}.data\'\nimport ${2:toDos}Reducer, { get${1:ToDos} } from \'./${1:ToDos}.modules\'\n\ndescribe(\'${3:TODOS} TESTS\', () => {\n\tconst setup = () => {\n\t\tconst props = {\n\t\t\tget${1:ToDos}: sinon.spy(),\n\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t}\n\n\t\tconst newStore = configureMockStore([])\n\n\t\tconst fakeStore = newStore({\n\t\t\t${2:toDos}: { ${2:toDos}: ${2:toDos}Data }\n\t\t})\n\n\t\tconst ContainerWrapper = mount(\n\t\t\t<Provider store={fakeStore}>\n\t\t\t\t<${1:ToDos}Container />\n\t\t\t</Provider>,\n\t\t).find(${1:ToDos}Container)\n\n\t\tconst ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)\n\n\t\treturn {\n\t\t\tContainerWrapper,\n\t\t\tComponentWrapper,\n\t\t\tprops,\n\t\t\tfakeStore\n\t\t}\n\t}\n\n\tcontext(\'${1:ToDos} container\', () => {\n\t\tconst { ContainerWrapper } = setup()\n\t\tit(\'should render the ${1:ToDos} component\', () => {\n\t\t\texpect(ContainerWrapper).to.exist\n\t\t})\n\n\t\tit(\'should render 20 ${2:toDos} components when mounted\', () => {\n\t\t\texpect(ContainerWrapper.find(\'article\').length).to.equal(20)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} component\', () => {\n\t\tconst { ComponentWrapper, props } = setup()\n\t\tit(\'should call get${1:ToDos} once when mounted\', () => {\n\t\t\texpect(props.get${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t})\n\n\t\tit(\'should call get${1:ToDos} again when props.appShouldgetContent is changed to true\', () => {\n\t\t\texpect(props.get${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t\tComponentWrapper.setProps({ appShouldgetContent: true })\n\t\t\texpect(props.get${1:ToDos}).to.have.property(\'callCount\', 2)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} action creators\', () => {\n\t\tit(\'Should export two functions: get${1:ToDos}, ${2:toDos}Reducer\', () => {\n\t\t\t// imported at top of file\n\t\t\texpect(get${1:ToDos}).to.be.a(\'function\')\n\t\t\texpect(${2:toDos}Reducer).to.be.a(\'function\')\n\t\t})\n\n\t\tit(\'get${1:ToDos}() should take a ${2:toDos} array as a parameter and return a proper RECEIVE_${3:TODOS} action object\', () => {\n\t\t\tconst expectedAction = {\n\t\t\t\ttype: \'RECEIVE_${3:TODOS}\',\n\t\t\t\t${2:toDos}: ${2:toDos}Data\n\t\t\t}\n\n\t\t\texpect(get${1:ToDos}(${2:toDos}Data)).to.deep.equal(expectedAction)\n\t\t})\n\t})\n\n\tcontext(\'${1:ToDos} reducer (action handlers)\', () => {\n\t\tit(\'GET_${3:TODOS} | should append geted ${2:toDos} to the ${2:toDos} array and set geting to false\', () => {\n\t\t\tconst GET_${3:TODOS} = receive${1:ToDos}(${2:toDos}Data)\n\n\t\t\tconst initialState = {\n\t\t\t\tappShouldgetContent: false,\n\t\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t\t\tgeting: true\n\t\t\t}\n\n\t\t\tconst expectedState = {\n\t\t\t\tappShouldgetContent: false,\n\t\t\t\t${2:toDos}: [ ...${2:toDos}Data, ...${2:toDos}Data ],\n\t\t\t\tgeting: false\n\t\t\t}\n\n\t\t\texpect(${2:toDos}Reducer(initialState, GET_${3:TODOS})).to.deep.equal(expectedState)\n\t\t})\n\t})\n})\n'
