import React, { Component, PropTypes } from 'react'
import classes from './Home.styles.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    const { fetchHomeContent } = this.props
    fetchHomeContent()
  }

  render () {
    const { content, title } = this.props

    return (
      <div className={classes.homeBackground}>
        <h2>{title}</h2>
        <section dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }
}

Home.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
  fetchHomeContent: PropTypes.any
}

module.exports = Home
