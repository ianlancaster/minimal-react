import React, { PropTypes } from 'react'
import classes from './Header.styles.scss'
import MainNav from 'globals/MainNav'

const Header = () => {
  return (
    <header id='header' className={classes.header}>
      <h1>SearchInnovator.com</h1>
      <MainNav />
    </header>
  )
}

module.exports = Header
