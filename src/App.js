
import { useState } from 'react';
import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
// import CreateForm from './CreateForm';


function App() {

const [isLogIn,setLogIn] = useState(false);
const handleName= () =>{
  setLogIn(true)
}
if (isLogIn === true) {
  return(
    <div>
      <Home/>
    </div>
  );
}


return(
  <>
    <div className="app">
      <LoginForm  handleName={handleName}/>
    </div>
  </>
);
}

export default App;

