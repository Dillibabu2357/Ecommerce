import React from "react"
import { kitchenData } from "../data/kitchen"
import Navbar from "../components/Navbar"

const Kitchen = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Kitchen</h1>
      <div className="productImage">
        {kitchenData.map((item) => {
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

export default Kitchen
