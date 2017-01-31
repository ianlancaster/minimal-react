import React, { PropTypes } from 'react'
import classes from './Header.styles.scss'

const Header = () => {
  return (
    <header id='header' className={classes.header}>
      <p>SearchInnovator.com</p>
    </header>
  )
}

module.exports = Header
