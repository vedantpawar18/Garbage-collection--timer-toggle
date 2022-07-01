import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
  const [toggle, setToggle]= useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }
  console.log(toggle)
  return (
    <div className="App">
      <div>
        {toggle ? <Timer />: null}
      </div>
      <div>
        <button onClick={handleToggle}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
