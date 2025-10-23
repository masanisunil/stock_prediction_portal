import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Button = (props) => {
  return (
    <>
    <Link className={`btn ${props.class}`} to={props.to}>{props.text}</Link>


    </>
  )
}

export default Button