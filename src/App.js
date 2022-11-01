import { useState } from 'react';
import Header from "./pages/header/header.js";
import Login from './pages/login/login.js';
import './App.css';

function App() {
  const idSelector = ((id) => document.getElementById(id))
  const classSelector = ((className) => document.querySelector(className))()
  const [userData, setUserData] = useState([])
  const [projectData, setProjectData] = useState([])
  const [loginWindowOpen, setLoginWindow] = useState(false)
  const [accountWindowOpen, setAccountWindow] = useState(false)
  const [accountName, setAccountName] = useState('')

  return (
    <div 
      className="App"
    >
      <Header
        setLoginWindow={setLoginWindow}
        accountName={accountName}
      />
      { loginWindowOpen ? 
      <Login 
        userData={userData} 
        $ID={idSelector} 
        setLoginWindow={setLoginWindow} 
        accountWindowOpen={accountWindowOpen}
        setAccountWindow={setAccountWindow} 
        setAccountName={setAccountName} 
      /> : null }
    </div>
  );
}

export default App;
