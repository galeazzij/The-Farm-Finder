import React from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../services/auth';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Home from '../screens/Home'

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/');
  }
  return (
    <>
      <Container>
      <Row>
        <Col><h1>The Farm Finder</h1></Col>
        <Col></Col>
        <Col> {
        props.currentUser ? (
          <>
            <p>Welcome {props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )

        }

     
            {/* {props.currentUser && (
              <h5>test holder</h5>
      // <>
      //   <Link to="/foods">Foods</Link>
      //   <Link to="/farms">Farms</Link>
      // </>
      ) */}
          
        </Col>
        
      </Row>
      
      
     
      </Container>
    </>
    

    
  )
}