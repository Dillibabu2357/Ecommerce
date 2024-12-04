import React from "react"
import { furnitureData } from "../data/furniture"
import Navbar from "../components/Navbar"

const Furniture = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Furnitures</h1>
      <div className="productImage">
        {furnitureData.map((item) => {
          return (
            <div>
              <div className="imageBox">
                <img className="imageSection" src={item.image} alt="" />
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

export default Furniture
