import React from 'react';
import { Grid, Card } from '@material-ui/core';
import ip from '../globalVar';
import { useEffect, useState } from 'react';

const axios = require('axios');

function Saudacao() {
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
    <Grid container justify='center' alignItems='center' direction='column' style={{minHeight:"100vh"}}>  
      <Grid item><Card color='blue'>{dado}</Card></Grid>
    </Grid>
  )
}


export default Saudacao;