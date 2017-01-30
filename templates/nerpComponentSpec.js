/* eslint-disable */

// ------------------------------------
// SHORTCUT
// ------------------------------------
'nerpComponentSpec'

// ------------------------------------
// OUTPUT
// ------------------------------------
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ToDosComponent from './ToDos.component'
import toDosData from './ToDos.data'

describe('TODOS TESTS', () => {
  const setup = () => {
    const props = {
      fetchToDos: sinon.spy(),
      toDos: toDosData,
    }

    const ComponentWrapper = shallow(<ToDosComponent {...props} />)

    return {
      ComponentWrapper,
      props
    }
  }

  context('ToDos component', () => {
    const { ComponentWrapper, props } = setup()

    it('should render the ToDos component', () => {
      expect(ComponentWrapper).to.exist
    })

    it('should render 20 toDos components when mounted', () => {
      expect(ComponentWrapper.find('article').length).to.equal(20)
    })

    it('should call fetchToDos once when mounted', () => {
      expect(props.fetchToDos).to.have.property('callCount', 1)
    })

    it('should call fetchToDos again when props.appShouldFetchContent is changed to true', () => {
      expect(props.fetchToDos).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetchToDos).to.have.property('callCount', 2)
    })
  })
})


// ------------------------------------
// INPUT
// ------------------------------------
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ${1:ToDos}Component from './${1:ToDos}.component'
import ${2:toDos}Data from './${1:ToDos}.data'

describe('${3:TODOS} TESTS', () => {
  const setup = () => {
    const props = {
      fetch${1:ToDos}: sinon.spy(),
      ${2:toDos}: ${2:toDos}Data,
    }

    const ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)

    return {
      ComponentWrapper,
      props
    }
  }

  context('${1:ToDos} component', () => {
    const { ComponentWrapper, props } = setup()

    it('should render the ${1:ToDos} component', () => {
      expect(ComponentWrapper).to.exist
    })

    it('should render 20 ${2:toDos} components when mounted', () => {
      expect(ComponentWrapper.find('article').length).to.equal(20)
    })

    it('should call fetch${1:ToDos} once when mounted', () => {
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 1)
    })

    it('should call fetch${1:ToDos} again when props.appShouldFetchContent is changed to true', () => {
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 1)
      ComponentWrapper.setProps({ appShouldFetchContent: true })
      expect(props.fetch${1:ToDos}).to.have.property('callCount', 2)
    })
  })
})


// ------------------------------------
// GENERATED
// ------------------------------------
'import React from \'react\'\nimport { expect } from \'chai\'\nimport { shallow } from \'enzyme\'\n\nimport ${1:ToDos}Component from \'./${1:ToDos}.component\'\nimport ${2:toDos}Data from \'./${1:ToDos}.data\'\n\ndescribe(\'${3:TODOS} TESTS\', () => {\n\tconst setup = () => {\n\t\tconst props = {\n\t\t\tfetch${1:ToDos}: sinon.spy(),\n\t\t\t${2:toDos}: ${2:toDos}Data,\n\t\t}\n\n\t\tconst ComponentWrapper = shallow(<${1:ToDos}Component {...props} />)\n\n\t\treturn {\n\t\t\tComponentWrapper,\n\t\t\tprops\n\t\t}\n\t}\n\n\tcontext(\'${1:ToDos} component\', () => {\n\t\tconst { ComponentWrapper, props } = setup()\n\n\t\tit(\'should render the ${1:ToDos} component\', () => {\n\t\t\texpect(ComponentWrapper).to.exist\n\t\t})\n\n\t\tit(\'should render 20 ${2:toDos} components when mounted\', () => {\n\t\t\texpect(ComponentWrapper.find(\'article\').length).to.equal(20)\n\t\t})\n\n\t\tit(\'should call fetch${1:ToDos} once when mounted\', () => {\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t})\n\n\t\tit(\'should call fetch${1:ToDos} again when props.appShouldFetchContent is changed to true\', () => {\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 1)\n\t\t\tComponentWrapper.setProps({ appShouldFetchContent: true })\n\t\t\texpect(props.fetch${1:ToDos}).to.have.property(\'callCount\', 2)\n\t\t})\n\t})\n})\n'
