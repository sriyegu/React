import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Happeningbox from './Happeningbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

function Newfeed( props) {
    const useStyles = makeStyles((theme) => ({

        root: {
            flexGrow: 1,
          },
          appBarSpacer: theme.mixins.toolbar,
          content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            width:'150%',
            paddingTop: '20%',
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

        ntextarea:{
        position: 'relative',
        zIndex: 1,
        width:'100%',
        color: '-internal-light-dark(black, white)',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        textTransform: 'none',
        textIndent: 0,
        textShadow: 'none',
        display: 'inline-block',
        textAlign: 'start',
        appearance: 'textfield',
        cursor: 'text',    
        font: '400 13.3333px Arial',
        padding: '1px 2px',
        borderWidth: '0px',
        borderStyle: 'inset',
        fontSize: 'x-large',
    },
    submit: {
        background : 'rgb(29 161 242)',
        color : '#ffffff',
        margin: theme.spacing(1, 0, 2),
        borderRadius:'20px',
        textTransform :'capitalize',
        fontWeight: '600',
      },
      fixedHeight: {
        height: 240,
      },
}));
const classes = useStyles();

const [dataChangeState,setChangeDataState] = useState({
  data:[
    {outputt:'Change Output'}
  ] 
}); 
const [OutputState,setoutputState] = useState({
  output:[
    {data:'Welcome To Twitter'},
  ]   
}); 
const handlechange = (event) => {
  event.preventDefault();
  setChangeDataState ({
    output :[
      {data : event.target.value}
    ]
  })
 console.log(dataChangeState)
}
const handlesubmit = (event) => {
  event.preventDefault();
  var newArray = OutputState.output.slice();    
  newArray.push(dataChangeState.output[0]);   
  setoutputState({output:newArray})
}
    return(
      <div className={classes.appBarSpacer} >
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Happeningbox tweet={handlesubmit} change={handlechange} />
                  </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper>
                  <div className="App-header">
                    {OutputState.output.map(key => (
                       <p>{key.data}</p>
                      ))}
                  </div>
                </Paper>    
              </Grid>
            </Grid>
            <Box pt={4}> <Copyright />  </Box>
          </Container>
        </main>
      </div>
    )
}

export default Newfeed;