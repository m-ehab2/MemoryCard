import './App.css'
import React, { useEffect, useState } from 'react'
import CardCon from './Components/CardCon'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const API_Key=import.meta.env.VITE_REACT_APP_API_KEY
  const [Data, setData] = useState(null);
  const [NumberOfCards,SetNum]=useState(4);
  const [Score, setScore] = useState(0);
  const [key, setkey] = useState(1);
  function getScore(Ch_S){
    setScore(Ch_S);
    return Ch_S;
  }
  function resetS(resetf){
    setkey(key+1);
    SetNum(4);
    window.alert('You Lost');
  }
  if(Score===NumberOfCards){
    SetNum(NumberOfCards*2)
  }
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&q=Animals&limit=${NumberOfCards}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setData(data.data);
    })
  }, [NumberOfCards])
  return (
    <>
    <Header sc={Score}/>
    {Data && <CardCon Data={Data} getS={getScore} resetS={resetS} key={key}/>}
    <Footer/>
    </>
  )
}

export default App
