import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <Header />
      <Main setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
