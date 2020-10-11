import React from "react";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


function Happeningbox( props) {

    const useStyles = makeStyles((theme) => ({

        root: {
            flexGrow: 1,
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

        ntextarea:{    
        position: 'inherit',
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
        position: 'inherit',       
        padding: '11px 45px',
        fontSize: '0.875rem',
        boxshadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        border: '#000',
      },
      fixedHeight: {
        height: 240,
      },
}));

    
 const classes = useStyles();

    return(
        <div className="App-happening">
            <div className={classes.wrap}>
                <form  onSubmit={props.tweet} >
                <textarea className={classes.ntextarea} onChange={props.change} placeholder="What's Happening..."></textarea>
                   <Divider />
                   <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            </Grid>
                        <Grid item xs={6} sm={3}>  </Grid>
                        <Grid item xs={6} sm={3}>
                            <button className={classes.submit} > Tweet </button>
                           
                        </Grid>
                        </Grid>
                    </div> 
                    </form>                   
            </div>
        </div>
    )
}

export default Happeningbox;