import React from "react"
import { womanData } from "../data/woman"
import Navbar from "../components/Navbar"

const Woman = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Woman</h1>
      <div className="productImage">
        {womanData.map((item) => {
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

export default Woman
