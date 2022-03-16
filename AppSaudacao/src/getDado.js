import ip from './globalVar';
import { useEffect, useState } from 'react';

const axios = require('axios');

function GetDado() {
  
  const [dado, setDado] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://${ip}:8000/saudacao`)
    .then(function (response) {
      setDado(response.data);

    })
    .catch(function (error) {
      console.log(error);
    })
  },[count])
  setInterval( () => setCount(count + 1) , 30000);
  console.log(dado)
  return (dado)
}

export default GetDado;