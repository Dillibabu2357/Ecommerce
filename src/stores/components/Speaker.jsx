import React from "react";
import { speakerData } from "../data/speaker";

const Speaker = () => {
  const firstFiveSpeaker = speakerData.slice(0, 5);

  return (
    <>
      <h1 className="TitleSection" >Speakers</h1>
      <div className="productSection">
        {firstFiveSpeaker.map((item, index) => {
          return (
            <div className="imageBox" key={index}>
              <img
                className="imageSection"
                src={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Speaker;
