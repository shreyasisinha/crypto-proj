import { React } from 'react';
import * as convert from 'color-convert';

const ColoredInput = props => {
  let color;
  if(props.mode === "bit")
    color = props.input === 0 ? "000000" : "ffffff";
  else if(props.mode === "byte") 
    color = convert.rgb.hex([props.input, props.input, props.input]);
  else 
    color = convert.cmyk.hex(props.input);
  
  return(
    <div style={{
      backgroundColor: "#"+color,
      display: "inline-block",
      width: "100%",
      height: "100%",
      border: "1px solid black"
    }}>
    </div>
  )
};

export default ColoredInput;