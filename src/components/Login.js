import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'; 


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  twetty:{
    width : '8%',
    marginBottom: theme.spacing(5),
  },
  form: {
    width: '40%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    minHeight: '49px',
    backgroundColor: 'rgb(119 196 243)',
    boxShadow: 'none',
    borderRadius: '28px',
  },
  email:{  
    backgroundColor: '#f5f8fa',
  },

  MuiContaine:{
    maxWidth: '555px',
},

}));

export default function Login(props) {
  const classes = useStyles();

  return (

      <div className={classes.paper}>
        <img alt='image' className={classes.twetty} src='https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/yxmuytylgavd6geuffoh.jpg' />
        <Typography component="h1" variant="h5">
         <b> Log in to Twitter  </b>
        </Typography>
        <form className={classes.form} Validate>
          <TextField
                
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={classes.email}
            autoFocus
          />
          <TextField
          
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.email} 
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Log in
          </Button>

          <Grid container>
            <Grid item>
              {/*<Link onClick={props.toggleTheme.bind(this,'Register')} variant="body2">
                {"Don't have an account? Sign Up"}
  </Link>*/}
            </Grid>
          </Grid>
        </form>
      </div>
   
  );
}