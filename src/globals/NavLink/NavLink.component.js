import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './NavLink.styles.scss'

const NavLink = ({ data }) => (
  <li>
    <Link to={data.route}>
      {data.label}
    </Link>
  </li>
)

NavLink.propTypes = {
  data: PropTypes.object.isRequired
}

module.exports = NavLink
