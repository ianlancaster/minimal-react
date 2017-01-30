import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Footer.styles.scss'
import NavIconLink from 'globals/NavIconLink'

import billsIcon from './assets/bills-icon.png'
import congressIcon from './assets/congress-icon.svg'
import accountIcon from './assets/account-icon.svg'
import notificationsIcon from './assets/notification-icon.svg'

const Footer = () => {
  return (
    <footer id='footer' className={classes.footer}>
      <ul>
        <NavIconLink icon={billsIcon} label={'Bills'} route={'/bills'} />
        <NavIconLink icon={congressIcon} label={'Congress'} route={'/congress'} />
        <NavIconLink icon={notificationsIcon} label={'Notifications'} route={'/notifications'} />
        <NavIconLink icon={accountIcon} label={'Me'} route={'/account'} />
      </ul>
    </footer>
  )
}

module.exports = Footer
