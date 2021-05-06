import React from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Register from '../pages/Register';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'100%',

    },
  form:{
      width:'100%',
      maxWidth:'600px',
      background:'#333',
      position:'absolute'
  }
  }));

function RegisterPopup() {
    const classes = useStyles();
    return (
        <div disableGutters className={classes.container}>
            <Register/>
            <form className={classes.form}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </div>
    )
}

export default RegisterPopup
