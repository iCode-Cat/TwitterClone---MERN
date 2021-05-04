import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
container:{
   height:'97vh'
},
register:{
},
hero:{
    background:'#42a5f5'
},
footer:{
   gridRow:'0fr'
},
btn:{
    width:'380px',
    maxWidth:'380px',
    height:'50px',
    borderRadius:'50px'
},
icon:{
    color:'#fff',
    fontSize:'250px'
}
})

export default function Register() {
    const classes = useStyles();
    return (
       <container >
            <Grid className={classes.container} container>
            <Grid container justify='center' alignItems='center' className={classes.hero} xs={12} md={7} item>
                <Icon className={classes.icon} >
                <TwitterIcon fontSize='large'  className={classes.icon} />
                </Icon>
            </Grid>
            <Grid container spacing={2} direction='column' justify='center' alignItems='center' className={classes.register} xs={12} md={5} item>
            <Grid item>
            <Button className={classes.btn} color='primary' variant='contained'>SIGN UP</Button>
            </Grid>
            <Grid item>
            <Button className={classes.btn} color='primary' variant='outlined'>LOG IN</Button>
            </Grid>
            </Grid>
            </Grid>
            <Grid className={classes.footer}  item>FOOTER</Grid>
       </container>
    )
}
