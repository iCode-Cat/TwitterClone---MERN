import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Register from '../pages/Register';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    container:{
        width:'100%',
        height:'100vh',
    },
  form:{
      width:'100%',
      maxWidth:'500px',
      display:'grid',
      gap:'5px',
      padding:'1rem',
      justifyContent:'center',
      justifyItems:'center',
      alignContent:'center'
      
  },
  btn:{
    width:'380px',
    maxWidth:'380px',
    height:'50px',
    borderRadius:'50px',
    marginTop:'1rem'
},
textField:{
    width:'100%'
},
twitter:{
    color:'#42a5f5'
}
  }));

function Signup() {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const history = useHistory();
    const classes = useStyles();

    
    return (
        <Grid alignItems='center' justify="center" container  className={classes.container}>
            <form className={classes.form}>
            <TwitterIcon className={classes.twitter}  fontSize='large'/>
            <TextField className={classes.textField} id="username" label="Username" variant="outlined" />
            <TextField className={classes.textField} id="password" label="Password" variant="outlined" />
            <Button className={classes.btn} color='primary' variant='contained'>SIGN UP</Button>
            </form>
        </Grid>
    )
}

export default Signup
