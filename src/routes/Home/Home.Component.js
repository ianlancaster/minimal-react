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
                <h3>Ian Lancaster | Front End Engineer & SEO Specialist</h3>
                <h3><span className={classes.smallerize}>Get In Touch</span></h3>
                <section className={classes.socialLinks}>
                  <a src='https://twitter.com/ianlancaster' rel='me' className={classes.twitterIcon} />
                  <a src='https://www.linkedin.com/in/ianclancaster' rel='me' className={classes.linkedInIcon} />
                  <a src='https://github.com/ianlancaster' rel='me' className={classes.gitHubIcon} />
                  <a src='' className={classes.emailIcon} />
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
