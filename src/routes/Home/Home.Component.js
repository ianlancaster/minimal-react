import React, { PropTypes } from 'react'
import classes from './Home.styles.scss'

const Home = ({ exampleProp1, exampleProp2 }) => {
  return (
    <div>
      <h2> exampleProp1: {exampleProp1}</h2>
      <h2> exampleProp2: {exampleProp2}</h2>
    </div>
  )
}

Home.propTypes = {
  exampleProp1: PropTypes.number,
  exampleProp2: PropTypes.number
}

module.exports = Home
