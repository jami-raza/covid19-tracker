import React from 'react';
import Worldwide from '../Components/Grid/Grids';
import Allcountries from '../Components/Allcountries/Allcountries';
import Chart from './Chart/Chart';



export default function Infopanel({currentscreen}) {
    if(currentscreen === 0)
    return<Worldwide />
    else if (currentscreen === 1)
    return <Allcountries />
    else 
    return<Chart />




  
}
