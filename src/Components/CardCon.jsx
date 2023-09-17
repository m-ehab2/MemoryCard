import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../Styles/CardContainer.css";

export default function CardCon(props) {
  const [Stat, setStat] = useState(1);
  function getGI(childData) {
    if(childData){
    setStat(Stat+1);
    props.getS(Stat);
    }
    else{
      console.log('lost');
      setStat(1);
      props.getS(0);
      props.resetS(1);
    }
    shuffleArray(props.Data);
    return childData;
  }
  function shuffleArray(array) {
    let len = array.length,
      currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
      let randIndex = Math.floor(Math.random() * (currentIndex + 1));
      var temp = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temp;
    }
  }
  let listItems = props.Data.map((number) => (
    <Card key={number.id} Datum={number} Rando={getGI} />
  ));
  return <div className="CardCon">{listItems}</div>;
}
