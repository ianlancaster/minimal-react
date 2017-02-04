const headShotImg = require('./assets/Ian-Lancaster-Headshot.jpg')

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
      <div>
        <section className={classes.homeBackground}>
          <div className={classes.mainContent}>
            <div className={classes.columnOneThird}>
              <img src={headShotImg} className={classes.headShotImg} />
            </div>
            <span className={classes.columnTwoThirds}>
              <h2>Hello, My name is Ian.</h2>
              <p>
                I am a front end software engineer and search engine optimization specialist.
              </p>
            </span>
          </div>
        </section>
        <section className={classes.mainContent}>
          <span className={classes.columnOneThird} />
          <span className={classes.columnTwoThirds}>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </span>
        </section>
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
