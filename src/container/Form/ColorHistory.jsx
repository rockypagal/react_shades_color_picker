import React from "react";
import { nanoid } from "nanoid";
import './ColorHistory.css';
export const ColorHistory = ({ historyColor,setColor }) => {

  if (historyColor.length == 6){
    historyColor.pop();
  }




  return (
    <div className="historyColor__list">
      {historyColor.map((item) => {
        
        return (
          <div key={nanoid()} className="historyColor__collection" >
            <div
              
              className="historyColor__card"
              style={{ background: item }}
              onClick={()=> setColor(item)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
