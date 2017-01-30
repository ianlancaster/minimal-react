import React, { Component, PropTypes } from 'react'
import classes from './Bills.styles.scss'
import Bill from 'globals/Bill'
import { ee } from 'globals/CoreLayout/CoreLayout.component'

class Bills extends Component {
  constructor () {
    super()
    this.state = {
      nextPage: 2
    }
  }

  componentWillMount () {
    const { fetchBills } = this.props

    fetchBills()
    ee.addListener('onScrollEnd',
      () => this.setState({ nextpage: ++this.state.nextPage },
        () => fetchBills(this.state.nextPage)
      )
    )
  }

  render () {
    const { bills } = this.props

    return (
      <div>
        <section id='bills-list'>
          {bills && (bills.map((bill, i) => <Bill key={i} {...bill} />))}
        </section>
      </div>
    )
  }
}

Bills.propTypes = {
  fetchBills: PropTypes.func.isRequired,
  bills: PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = Bills
