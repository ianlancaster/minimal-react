import React, { Component, PropTypes } from 'react'
import classes from './MainNav.styles.scss'
import NavLink from 'globals/NavLink'

class MainNav extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    const { fetchMainNavContent } = this.props
    fetchMainNavContent()
  }

  render () {
    const { navItems } = this.props
    console.log(navItems)
    return (
      <nav className='main-navaigation'>
        <ul>
          {navItems.map((navItem, i) => <NavLink data={navItem} key={i} />)}
        </ul>
      </nav>
    )
  }
}

MainNav.propTypes = {
  navItems: PropTypes.any,
  fetchMainNavContent: PropTypes.any
}

module.exports = MainNav
