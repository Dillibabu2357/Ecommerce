import React from "react"
import { computerData } from "../data/computers"
import Navbar from "../components/Navbar"

const Computers = () => {
  return (
    <>
    <Navbar/>
      <h1 className="TitleSection">Computers</h1>
      <div className="productImage">
        {computerData.map((item) => {
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

export default Computers
