import React from 'react';
import { Grid, Card } from '@material-ui/core';
import getDado from '../getDado'

function Saudacao(){
  let data = getDado()
  return (
    <Grid container justifyContent='center' alignItems='center' direction='column' style={{minHeight:"100vh"}}>  
      <Grid item><Card color='blue'>{data}</Card></Grid>
    </Grid>
  )
}


export default Saudacao;