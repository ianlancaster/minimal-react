import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './NavLink.styles.scss'

class NavLink extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { data } = this.props

    return (
      <li className={classes.mainNavLink}>
        <Link to={data.route}>
          {data.label}
        </Link>
      </li>
    )
  }
}

NavLink.propTypes = {
  data: PropTypes.object.isRequired
}

module.exports = NavLink
