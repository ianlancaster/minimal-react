import React, { PropTypes } from 'react'
import classes from './Header.styles.scss'

const Header = () => {
  return (
    <header id='header' className={classes.header}>
      <h1>SearchInnovator.com</h1>
    </header>
  )
}

module.exports = Header
