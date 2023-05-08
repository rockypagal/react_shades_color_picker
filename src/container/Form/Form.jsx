import React, { useState, useEffect } from "react";
import "./Form.css";
import Values from "values.js";
import { ColorHistory } from "./ColorHistory";

const getHistoryColor = () =>{
  const ifColor = localStorage.getItem("historyColor");

  if(ifColor){
    return JSON.parse(ifColor);
  }else{
    return [];
  }
}

const Form = ({ setColors, toast, local_storage }) => {
  const [color, setColor] = useState(local_storage());
  const [historyColor, setHistoryColor] = useState(getHistoryColor());

  //  uniq = [...new Set(array)];

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setColors(new Values(color).all(5));
      // console.log(historyColor);
      
        if (!historyColor.includes(color)) {
      const allColors = [color, ...historyColor];
      setHistoryColor(allColors);
      // removeDuplicates(historyColor);
    }
    } catch (error) {
      toast.error("Ohh sorry that color doesn't exist");
      localStorage.removeItem('color');
    }

  
  };

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("historyColor", JSON.stringify(historyColor));
  }, [color]);

  return (
    <>
      <div className="form__content container">
        <div className="form__heading">
          <h2>
            Find The Shade That You <br />
            Desire With <span>Shades</span>
          </h2>
          <p>
            Introducing Shades the new color shades picker! This tool allows
            <br />
            users to easily select multiple shades of their desired color with
            just a few clicks.
          </p>
        </div>

        <div className="form__inputs">
          <form action="" onSubmit={handleSubmit}>
            <div className="form__inputs-controls">
              <input
                type="color"
                value={color}
                id="form__colorPicker"
                onChange={(e) => setColor(e.target.value)}
                className="form__colorPicker"
              />
              <input
                type="text"
                placeholder="#color"
                name=""
                id=""
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="form__search"
              />
              <button
                type="submit"
                className="form__submit"
                style={{ color: color }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="form__privies-color">
          <ColorHistory historyColor={historyColor} setColor={setColor} />
        </div>
      </div>
    </>
  );
};

export default Form;
