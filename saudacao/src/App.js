import './App.css';
import ip from './globalVar';
import { useEffect, useState } from 'react';

const axios = require('axios');

function App(){
  const [dado, setDado] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://${ip}:5000/saudacao`)
    .then(function (response) {
      setDado(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  },[count])

  setInterval( () => setCount(count + 1) , 30000);

  return (
    <div className="App">
      <div>{dado}</div>
    </div>
  );
}

export default App;
