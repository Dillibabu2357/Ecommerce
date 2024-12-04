import React from "react"
import { menData } from "../data/men"
import Navbar from "../components/Navbar"

const Men = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Men</h1>
      <div className="productImage">
        {menData.map((item) => {
          return (
            <div>
              <div className="imageBox">
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

export default Men
