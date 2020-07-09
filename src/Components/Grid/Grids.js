import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from "react-countup";
import styles from './Grid.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '770px',
    marin: '0 auto',
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  title:{
    color:'#3f51b5',
    textTransform:'uppercase'
  },
  value:{
    fontStyle:'bold',
    color:'',
    


  }
  
}));

export default function Worldwide() {

    const [globaldata, setglobaldata] = useState({});

    useEffect (()=>{
        async function getdata(){
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            delete data.results[0].source;
            delete data.results[0].total_unresolved;
            delete data.results[0].total_serious_cases;
            delete data.results[0].total_affected_countries;
            setglobaldata(data.results[0]);
            console.log(data.results);
        
        }
        getdata();
    }, []);
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
          {Object.keys(globaldata).map((key,ind)=>
          {
              return(
                <Grid item xs={12} sm={3}key={ind}>
                <Paper className={classes.paper}s>
                    <h3 className= {classes.title}>
                        {key.replace(/_/g,' ')}
                    </h3>
                    <h3 className={classes.value}>
                    <CountUp start={0} end={globaldata[key]} duration={5} separator={","}/>
                    </h3>
                </Paper>
              </Grid>

              )
          })}
        
        
        
      </Grid>
    </div>
  );
}
