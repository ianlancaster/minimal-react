import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import BillComponent from './Bill.component'
import billData from 'routes/Bills/Bills.data'

describe('BILL TESTS', () => {
  const setup = () => {
    const props = {
      ...billData[0]
    }

    const ComponentWrapper = shallow(<BillComponent {...props} />)

    return {
      ComponentWrapper,
      props
    }
  }

  context('Bill component', () => {
    const { ComponentWrapper, props } = setup()

    it('should render the Bill component', () => {
      expect(ComponentWrapper).to.exist
    })

    it('should render an article, h2, h3, p', () => {
      expect(ComponentWrapper.html()).to.contain('</article>', '</h2>', '</h3>', '</p>')
    })

    it('should render the data provided by the bill object', () => {
      const requiredProps = [ 'official_title', 'bill_id', 'introduced_on', 'last_action_at' ]

      expect(ComponentWrapper.text()).to.contain(...requiredProps.map((prop) => props[prop]))
    })
  })
})
