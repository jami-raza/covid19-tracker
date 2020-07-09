import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    width:TextareaAutosize,
        margin: '0 auto',
        marginTop: 50,
        overflow:'scroll',
    display:'block',
    
    
  },
  items:{
    width:'100%',
    position:'fixed',
    top:'0',
    fontStyle:'bold',
    
    
    backgroundColor:'white',
  },
  mainitems:{
    textAlign:'right',
    position:'fixed',
    height:'500',
    overflow:'clip',
    
    
    
    
  },
  main:{
    
    paddingLeft:'10%',
  },
  main2:{
    
    paddingLeft:'20%',
    marginLeft:'100px',
  },

});



export default function Allcountries() {

    const [globaldata, setglobaldata] = useState([{}]);
    useEffect(()=>{
        async function getdata(){
            const response = await fetch ("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setglobaldata(Object.values(Object.values(data.countryitems)[0]));
            console.log(Object.values(Object.values(data.countryitems)[0]));
        }
        getdata();
    },[])
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} >
        
        <TableHead className={classes.items} >
          <TableRow >
          
          <TableCell >Country Name</TableCell>
            <TableCell className={classes.main2} >Total cases</TableCell>
            <TableCell className={classes.main2} >Total Deaths</TableCell>
            <TableCell className={classes.main2}>Total Recovered</TableCell>
            <TableCell className={classes.main2}>Today Cases</TableCell>
            
            </TableRow>
            
        </TableHead>
        
        <TableBody  >
            
        {globaldata.map((key, ind) => {
            return(
              
            <TableRow   key={ind} >
                

                    
                
              <TableCell  component="th" scope="row"  >
              {globaldata[ind].title}
              </TableCell>
              
            <TableCell  >{globaldata[ind].total_cases}</TableCell>
              
              <TableCell component="th" scope="row">{globaldata[ind].total_deaths}</TableCell>
              <TableCell component="th" scope="row">{globaldata[ind].total_recovered}</TableCell>
              <TableCell component="th" scope="row"className={classes.main}>{globaldata[ind].total_new_cases_today}</TableCell>
                    
              </TableRow>
              
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
