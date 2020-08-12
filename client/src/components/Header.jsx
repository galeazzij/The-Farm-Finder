import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1>The Farm Finder</h1>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )

      }
    </header>
  )
}