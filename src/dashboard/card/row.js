import * as React from "react";

export default function RowsGrid(props) {
  if (props.growth < 0){
    return (
      <div style={{}}>
        <b>Current Price</b> : {props.current_price}
        <br />
        <b>Expected Price</b> : {props.expected}(<span style={{color: "Red"}}>{props.growth}%</span>)<br />
      </div>
    );
  }
  else {
    return (
      <div style={{}}>
        <b>Current Price</b> : {props.current_price}
        <br />
        <b>Expected Price</b> : {props.expected}(<span style={{color: "Green"}}>{props.growth}%</span>)<br />
      </div>
    );
  }
}
  