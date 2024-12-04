import React from "react"
import { fridgeData } from "../data/fridge"
import Navbar from "../components/Navbar"

const Fridge = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Fridge</h1>
      <div className="productImage">
        {fridgeData.map((item) => {
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

export default Fridge
