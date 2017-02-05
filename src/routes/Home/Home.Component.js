const headShotImg = require('./assets/Ian-Lancaster-Headshot.jpg')

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
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
              <div className={classes.verticalOffset}>
                <img src={headShotImg} className={classes.headShotImg} />
                <h3>Get In Touch</h3>
                <section className={classes.socialLinks}>
                  <Link to='/'> <div className={classes.twitterIcon} /> </Link>
                  <Link to='/'> <div className={classes.linkedInIcon} /> </Link>
                  <Link to='/'> <div className={classes.gitHubIcon} /> </Link>
                  <Link to='/'> <div className={classes.emailIcon} /> </Link>
                </section>
              </div>
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
            <h3>A Little About Me</h3>
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
