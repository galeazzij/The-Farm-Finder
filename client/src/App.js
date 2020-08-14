import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import { verifyUser } from './services/auth';
import NavBar from './components/NavBar';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser();
    setCurrentUser(userData);
  } 
  

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
