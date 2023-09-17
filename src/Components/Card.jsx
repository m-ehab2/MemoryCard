import React, { useState } from "react";

export default function Card(props) {
  const [Clicked, setClicked] = useState(false);
  return (
    <div
      className="Card"
      onClick={(e) => {
        if (!Clicked) {
          setClicked(true);
          props.Rando(true);
        } else {
          props.Rando(false);
        }
      }}
    >
      <img src={props.Datum.images.fixed_width_downsampled.url} alt="" />
      <p>
        {props.Datum.title}
        {Clicked}
      </p>
    </div>
  );
}
