import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      

    }
  }

  // const toggleMode1 = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#15bd2b';
  //     showAlert("Green mode has been enable", "success");

  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enable", "success");

  //   }
  // }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  aboutText="About"/>
    <Alert alert={alert}/>
        
    <div className="container my-3">
    <Switch>
          <Route exact path="/" component={TextForm}>
          <TextForm showAlert={showAlert} heading="TextUtils - Character count, Word count, UpperCase to LowerCase, LowerCase to UpperCase , Clear Text" mode={mode}/>
          </Route>
          <Route exact path="/about" component={About}>
            <About mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;