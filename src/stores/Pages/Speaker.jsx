import React from "react"
import { speakerData } from "../data/speaker"
import Navbar from "../components/Navbar"

const Speaker = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Speakers</h1>
      <div className="productImage">
        {speakerData.map((item, index) => {
          return (
            <div>
              <div className="imageBox" key={index}>
                <img className="imageSection" src={item.image} />
              </div>
              <div>
                {item.model},{"Rupee" + item.price}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Speaker
