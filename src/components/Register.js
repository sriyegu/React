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

export default function Register() {
  const classes = useStyles();

  return (

      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
         <b> Register to Twitter  </b>
        </Typography>
        <form className={classes.form} Validate>

        <TextField
                
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                className={classes.email}
                autoFocus
              />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Register
          </Button>

       
        </form>
      </div>
   
  );
}