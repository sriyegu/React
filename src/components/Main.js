import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },    
  image: {
    //rgb(113 201 248)
    backgroundOrigin: 'content-box',
    backgroundColor: 'rgb(246 246 246)', 
   // backgroundImage: 'url(https://source.unsplash.com/random)',    
    backgroundImage: 'url(https://p.kindpng.com/picc/s/30-300726_cute-bird-vector-png-transparent-png.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'initial',
    backgroundPosition: 'center',
  },
  ll:{
    backgroundColor: ' rgb(113 201 248)', 
  },
  paper: {
    margin: theme.spacing(19, 22),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign:'left',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    color : 'rgb(29 161 242)',
    background : '#ffffff',
    margin: theme.spacing(1, 0, 2),
    borderRadius:'20px',
    textTransform :'capitalize',
    fontWeight: '600',

  },
  h1css:{
    color:'rgb(20 23 26)',
    fontSize: '30px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontWeight: '700',
    letterSpacing: '0em',
    lineHeight: '1.3125',
  },

  h3css:{
    color:'rgb(20 23 26)',
    fontSize: '15px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    fontWeight: '700',
    letterSpacing: '0em',
    lineHeight: '1.3125',
  },


}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7}  className={classes.ll} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          
          <p className={classes.h1css} >See what’s happening in the world right now </p>
          <form className={classes.form} noValidate>          

          <Grid container>
              <Grid item xs className={classes.h3css}>
                Join Twitter today.
              </Grid>
            </Grid>
            <Button
            onClick={props.toggleTheme.bind(this,'Feed')}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
            onClick={props.toggleTheme.bind(this,'Feed')}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Log In
            </Button>


           
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}