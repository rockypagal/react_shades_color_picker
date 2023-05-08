import React from "react";

export const SingleColor = ({ bgColor, index, toast }) => {
  const { hex, weight, rgb } = bgColor;
  let rgba = rgb.join(",");

  const saveToClipboard = async (e) => {
      let copy = e.target.getAttribute("id") == 'hex' ? `#${hex}`:`rgb(${rgb})`;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(copy);
          toast.success("Color Copied successfully");
        } catch (error) {
          toast.error("Something went wrong can't copy the color");
        }
      } else {
        toast.error("Browser does not support copying");
      }
    
  };

  

  return (
    <div className="color__card">
      <div className="color__box" style={{ background: `#${hex}` }}></div>

      <div className="color__info">
        <div>
          <p>{index < 20 ? "Tint" : "Shade"}</p>
          <p>{weight}%</p>
        </div>
        <div>
          <p>#hex</p>
          <p>
            #{hex}
            <i
              className="fa-regular fa-paste"
              id="hex"
              onClick={saveToClipboard}
            ></i>
          </p>
        </div>
        <div>
          <p>rgb</p>
          <p>
            {rgba}
            <i
              className="fa-regular fa-paste"
              id="rgb"
              onClick={saveToClipboard}
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
};
