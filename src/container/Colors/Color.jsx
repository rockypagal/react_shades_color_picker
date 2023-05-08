import React from "react";
import { nanoid } from "nanoid";
import "./Colors.css";
import { SingleColor } from "./SingleColor";

const Color = ({ color, toast }) => {
  return (
    <div className="color__content container">
      <div className="color__history"></div>

      <div className="color__grid">
        {color.map((bgColor, index) => {
          if (index > 0 && index < color.length-1) {
            return (
              <SingleColor
                toast={toast}
                key={nanoid()}
                index={index}
                bgColor={bgColor}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default Color;
