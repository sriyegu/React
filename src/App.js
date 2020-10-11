import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Addfriend from './components/Addfriends';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Main from './components/Main'; 
import Feed from './components/Feed'; 




function App() {
  const [redirecttologin, setredirecttologin] = useState('Feed');
  const toggleTheme = (x) => {
    setredirecttologin(x);
  }  


  return (
    <div className="App">  
      {/*redirecttologin*/}
     { redirecttologin === 'Home'  ? <Main toggleTheme={toggleTheme} />  :<Feed /> }
        
  
       {/*<header ><Header toggleTheme={toggleTheme} /></header>
        {redirecttologin === 'Login'  ? <Login />  : redirecttologin === 'Register' ? <Register /> : redirecttologin === 'Addfriend' ? <Addfriend /> : redirecttologin === 'Main' ? <Main /> : <Home /> }
  */}
    </div>
  );
}

export default App;
