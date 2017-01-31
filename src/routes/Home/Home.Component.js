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
    const homeContent = this.props.homeContent[0]
    const content = homeContent.content.rendered
    const title = homeContent.title.rendered

    return (
      <div>
        <h2>{title}</h2>
        <section dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }
}

Home.propTypes = {
  homeContent: PropTypes.any,
  fetchHomeContent: PropTypes.any
}

module.exports = Home
