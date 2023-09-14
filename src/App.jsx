import React, { useState } from 'react'
import Gradient from './components/Gradient'
import './App.css'


export default function App(){

  const [gradient,setGradient]=useState("pink")

  return(
    <div className='Appa' style={{background:gradient}}>
       <Gradient gradient={gradient} setGradient={setGradient}/>
    </div>
  );
}

