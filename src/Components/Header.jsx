import React, { useState } from 'react'
import '../Styles/Header.css'
export default function Header(props) {
  const [HighScore, setHighScore] = useState('0');
  if(props.sc>HighScore){
    setHighScore(props.sc);
  }
  return (
    <div className='Header'>
        <h1>GIF Memory Game</h1>
        <div className="score">
            <h2>Current Score:{props.sc}</h2>
            <h2>High Score:{HighScore} </h2>
        </div>
    </div>
  )
}
