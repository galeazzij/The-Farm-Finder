import React from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../services/auth';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/');
  }
  return (
    <header>
      <h1>The Farm Finder</h1>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )

      }

      <hr />
     { props.currentUser && (
      <>
        <Link to="/foods">Foods</Link>
        <Link to="/farms">Farms</Link>
      </>
      )
      }
    </header>
  )
}